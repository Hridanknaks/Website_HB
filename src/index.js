export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname.startsWith('/public/')) {
      const key = url.pathname.slice(1);
      const range = request.headers.get('Range');
      
      if (range) {
        // Handle range requests for streaming
        const object = await env.ASSETS.get(key, {
          range: request.headers.get('Range')
        });
        
        if (object) {
          return new Response(object.body, {
            status: 206,
            headers: {
              'Content-Type': object.httpMetadata?.contentType || 'video/mp4',
              'Accept-Ranges': 'bytes',
              'Content-Range': object.range,
              'Content-Length': object.body.length,
              'Cache-Control': 'public, max-age=31536000'
            }
          });
        }
      }
      
      // Regular non-range request
      const object = await env.ASSETS.get(key);
      if (object) {
        return new Response(object.body, {
          headers: {
            'Content-Type': object.httpMetadata?.contentType || 'video/mp4',
            'Accept-Ranges': 'bytes',
            'Cache-Control': 'public, max-age=31536000'
          }
        });
      }
    }
    
    return new Response('Not found', { status: 404 });
  }
};