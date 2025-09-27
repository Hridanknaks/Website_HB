export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle requests for /public/ assets from R2
    if (url.pathname.startsWith('/public/')) {
      const key = url.pathname.slice(1); // Remove only the leading '/', keep 'public/'
      const object = await env.ASSETS.get(key);
      
      if (object) {
        return new Response(object.body, {
          headers: {
            'Content-Type': object.httpMetadata?.contentType || 'application/octet-stream',
            'Cache-Control': 'public, max-age=86400'
          }
        });
      }
    }
    
    return new Response('Not found', { status: 404 });
  }
};