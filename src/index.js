export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cache = caches.default;
    
    // Handle R2 asset serving with proper video streaming
    if (url.pathname.startsWith('/public/')) {
      return await handleAssetRequest(request, env, url);
    }
    
    // Handle HTML pages and inject media preloading
    if (request.method === 'GET' && (url.pathname === '/' || url.pathname.endsWith('.html'))) {
      return await handleHTMLWithMediaPrefetch(request, env, cache);
    }
    
    return new Response('Not found', { status: 404 });
  }
};

// FIXED VIDEO STREAMING HANDLER
async function handleAssetRequest(request, env, url) {
  const key = url.pathname.slice(1);
  const range = request.headers.get('Range');
  
  // Get object metadata to know the total size
  const objectHead = await env.ASSETS.head(key);
  if (!objectHead) {
    return new Response('Asset not found', { status: 404 });
  }
  
  const totalSize = objectHead.size;
  const contentType = getContentType(key);
  
  if (range) {
    // Parse range header properly
    const rangeMatch = range.match(/bytes=(\d*)-(\d*)/);
    if (!rangeMatch) {
      return new Response('Invalid Range', { status: 416 });
    }
    
    let start = parseInt(rangeMatch[1]) || 0;
    let end = parseInt(rangeMatch[2]) || totalSize - 1;
    
    // Ensure end doesn't exceed file size
    if (end >= totalSize) {
      end = totalSize - 1;
    }
    
    // Ensure start is valid
    if (start >= totalSize || start > end) {
      return new Response(`Requested Range Not Satisfiable`, { 
        status: 416,
        headers: {
          'Content-Range': `bytes */${totalSize}`
        }
      });
    }
    
    const contentLength = end - start + 1;
    
    // Get the specific range from R2
    const object = await env.ASSETS.get(key, {
      range: {
        offset: start,
        length: contentLength
      }
    });
    
    if (!object) {
      return new Response('Range not satisfiable', { status: 416 });
    }
    
    return new Response(object.body, {
      status: 206,
      headers: {
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
        'Content-Length': contentLength.toString(),
        'Cache-Control': 'public, max-age=31536000',
        'ETag': objectHead.httpEtag
      }
    });
  }
  
  // Regular non-range request
  const object = await env.ASSETS.get(key);
  if (object) {
    return new Response(object.body, {
      headers: {
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Content-Length': totalSize.toString(),
        'Cache-Control': 'public, max-age=31536000',
        'ETag': objectHead.httpEtag
      }
    });
  }
  
  return new Response('Asset not found', { status: 404 });
}

// HTML + MEDIA PRELOADING HANDLER
async function handleHTMLWithMediaPrefetch(request, env, cache) {
  const url = new URL(request.url);
  
  // Check if media has been cached for this site
  const cacheKey = `${url.origin}/media-preloaded`;
  const mediaPreloaded = await cache.match(cacheKey);
  
  // Get your main HTML
  let htmlResponse = await getMainHTML(request, env);
  
  if (!htmlResponse) {
    return new Response('Page not found', { status: 404 });
  }
  
  // If this is the first visit, start preloading media in background
  if (!mediaPreloaded) {
    const ctx = { waitUntil: (promise) => promise };
    ctx.waitUntil(preloadAllMedia(url.origin, env, cache));
    
    // Mark media as being preloaded
    await cache.put(cacheKey, new Response('preloaded', {
      headers: { 'Cache-Control': 'max-age=86400' }
    }));
  }
  
  // Transform HTML to add preload links and prefetch script
  const transformedHTML = await injectMediaPreloads(htmlResponse, env);
  
  return new Response(transformedHTML, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

async function getMainHTML(request, env) {
  const htmlKey = 'public/index.html';
  const htmlObject = await env.ASSETS.get(htmlKey);
  
  if (htmlObject) {
    return await htmlObject.text();
  }
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Website</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1>Welcome to My Website</h1>
      <!-- Your content here -->
    </body>
    </html>
  `;
}

async function injectMediaPreloads(html, env) {
  const { images, videos } = await getAllMediaUrls(env);
  
  // Preload critical images (first 8)
  const imagePreloadLinks = images.slice(0, 8)
    .map(url => `<link rel="preload" href="${url}" as="image">`)
    .join('\n  ');
  
  // Preload video metadata only (first 3 videos)
  const videoPreloadLinks = videos.slice(0, 3)
    .map(url => `<link rel="preload" href="${url}" as="video" type="video/mp4">`)
    .join('\n  ');
  
  // Create comprehensive prefetch script
  const prefetchScript = `
    <script>
      window.addEventListener('load', function() {
        const remainingImages = ${JSON.stringify(images.slice(8))};
        const remainingVideos = ${JSON.stringify(videos.slice(3))};
        
        // Prefetch remaining images immediately
        remainingImages.forEach(function(src) {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = src;
          link.as = 'image';
          document.head.appendChild(link);
        });
        
        // Prefetch videos with delay and intersection observer
        setTimeout(function() {
          prefetchVideos(remainingVideos);
        }, 2000);
        
        // Prefetch first few seconds of critical videos
        const criticalVideos = ${JSON.stringify(videos.slice(0, 3))};
        prefetchVideoSegments(criticalVideos);
      });
      
      function prefetchVideos(videoUrls) {
        // Use Intersection Observer to prefetch videos when user scrolls
        if (!window.IntersectionObserver) return;
        
        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const video = entry.target;
              const src = video.dataset.src || video.src;
              
              if (src && videoUrls.includes(src)) {
                prefetchVideo(src);
                observer.unobserve(video);
              }
            }
          });
        }, { rootMargin: '200px' });
        
        // Observe all video elements
        document.querySelectorAll('video').forEach(function(video) {
          observer.observe(video);
        });
        
        // Also prefetch top 2 videos regardless
        videoUrls.slice(0, 2).forEach(prefetchVideo);
      }
      
      function prefetchVideo(src) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = src;
        link.as = 'video';
        document.head.appendChild(link);
      }
      
      function prefetchVideoSegments(videoUrls) {
        // Prefetch first 1MB of each critical video
        videoUrls.forEach(function(videoUrl) {
          fetch(videoUrl, {
            headers: { 'Range': 'bytes=0-1048576' }
          }).then(function(response) {
            if (response.ok) {
              return response.blob();
            }
          }).then(function(blob) {
            if (blob && 'caches' in window) {
              caches.open('video-segments-v1').then(function(cache) {
                cache.put(videoUrl + '?segment=0-1048576', new Response(blob));
              });
            }
          }).catch(function(error) {
            console.log('Video segment prefetch failed:', error);
          });
        });
      }
    </script>
  `;
  
  // Inject into HTML head
  const allPreloads = [imagePreloadLinks, videoPreloadLinks].filter(Boolean).join('\n  ');
  let modifiedHtml = html.replace(
    '</head>', 
    `  ${allPreloads}\n  ${prefetchScript}\n</head>`
  );
  
  return modifiedHtml;
}

async function getAllMediaUrls(env) {
  const images = [];
  const videos = [];
  
  // List all objects in R2 bucket
  const listResponse = await env.ASSETS.list({
    prefix: 'public/'
  });
  
  for (const object of listResponse.objects) {
    if (isImageFile(object.key)) {
      images.push(`/${object.key}`);
    } else if (isVideoFile(object.key)) {
      videos.push(`/${object.key}`);
    }
  }
  
  // Sort by likely importance
  images.sort((a, b) => {
    if (a.includes('thumb') || a.includes('small')) return -1;
    if (b.includes('thumb') || b.includes('small')) return 1;
    return 0;
  });
  
  videos.sort((a, b) => {
    if (a.includes('hero') || a.includes('featured')) return -1;
    if (b.includes('hero') || b.includes('featured')) return 1;
    return 0;
  });
  
  return { images, videos };
}

async function preloadAllMedia(origin, env, cache) {
  try {
    const { images, videos } = await getAllMediaUrls(env);
    
    // Cache critical images immediately (first 10)
    await cacheMediaBatch(origin, images.slice(0, 10), cache, 'image');
    
    // Cache video metadata/first segments
    await cacheVideoSegments(origin, videos.slice(0, 3), cache);
    
    // Cache remaining images in background with delay
    setTimeout(async () => {
      await cacheMediaBatch(origin, images.slice(10), cache, 'image');
    }, 5000);
    
  } catch (error) {
    console.error('Failed to preload media:', error);
  }
}

async function cacheMediaBatch(origin, mediaPaths, cache, type) {
  const batchSize = type === 'image' ? 8 : 2;
  
  for (let i = 0; i < mediaPaths.length; i += batchSize) {
    const batch = mediaPaths.slice(i, i + batchSize);
    
    const promises = batch.map(async (mediaPath) => {
      try {
        const mediaUrl = `${origin}${mediaPath}`;
        const mediaRequest = new Request(mediaUrl);
        
        const cached = await cache.match(mediaRequest);
        if (!cached) {
          const response = await fetch(mediaRequest);
          if (response.ok) {
            await cache.put(mediaRequest, response.clone());
          }
        }
      } catch (error) {
        console.error(`Failed to cache ${type} ${mediaPath}:`, error);
      }
    });
    
    await Promise.all(promises);
  }
}

async function cacheVideoSegments(origin, videoPaths, cache) {
  const promises = videoPaths.map(async (videoPath) => {
    try {
      const videoUrl = `${origin}${videoPath}`;
      const segmentRequest = new Request(videoUrl, {
        headers: { 'Range': 'bytes=0-1048576' }
      });
      
      const response = await fetch(segmentRequest);
      if (response.ok) {
        await cache.put(`${videoUrl}?segment=start`, response.clone());
      }
    } catch (error) {
      console.error(`Failed to cache video segment ${videoPath}:`, error);
    }
  });
  
  await Promise.all(promises);
}

function isImageFile(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'];
  return imageExtensions.some(ext => filename.toLowerCase().endsWith(ext));
}

function isVideoFile(filename) {
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv', '.m4v'];
  return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
}

function getContentType(filename) {
  const ext = filename.toLowerCase().split('.').pop();
  
  const mimeTypes = {
    // Videos
    'mp4': 'video/mp4',
    'webm': 'video/webm', 
    'mov': 'video/quicktime',
    'avi': 'video/x-msvideo',
    'mkv': 'video/x-matroska',
    'm4v': 'video/mp4',
    
    // Images
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png', 
    'gif': 'image/gif',
    'webp': 'image/webp',
    'avif': 'image/avif',
    'svg': 'image/svg+xml',
    
    // Other
    'pdf': 'application/pdf',
    'txt': 'text/plain'
  };
  
  return mimeTypes[ext] || 'application/octet-stream';
}
