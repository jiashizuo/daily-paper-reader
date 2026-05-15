const TARGET_BASE_URL = "https://api.apikey.fun";

function corsHeaders(request) {
  const origin = request.headers.get("Origin") || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Authorization, Content-Type, Accept",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

function jsonResponse(body, status, request) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(request),
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(request),
      });
    }

    if (!env.OPENAI_API_KEY) {
      return jsonResponse(
        { error: { message: "Missing Worker secret OPENAI_API_KEY" } },
        500,
        request,
      );
    }

    const incomingUrl = new URL(request.url);
    if (!incomingUrl.pathname.startsWith("/v1/")) {
      return jsonResponse(
        { error: { message: "Use /v1/* endpoints, for example /v1/chat/completions" } },
        404,
        request,
      );
    }

    const targetUrl = new URL(incomingUrl.pathname + incomingUrl.search, TARGET_BASE_URL);
    const headers = new Headers(request.headers);
    headers.set("Authorization", `Bearer ${env.OPENAI_API_KEY}`);
    headers.set("Host", new URL(TARGET_BASE_URL).host);

    const upstreamResponse = await fetch(targetUrl, {
      method: request.method,
      headers,
      body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
    });

    const responseHeaders = new Headers(upstreamResponse.headers);
    const allowedCors = corsHeaders(request);
    Object.entries(allowedCors).forEach(([key, value]) => {
      responseHeaders.set(key, value);
    });
    responseHeaders.delete("Content-Encoding");
    responseHeaders.delete("Content-Length");

    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers: responseHeaders,
    });
  },
};
