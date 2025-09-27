export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname.startsWith('/public/')) {
      const key = url.pathname.slice(1);
      const range = request.headers.get('Range');
      
      // First, get object metadata to know the total size
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
    }
    
    return new Response('Not found', { status: 404 });
  }
};

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
