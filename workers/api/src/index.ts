export interface Env {
  THEMARVEL_DB: D1Database;
  THEMARVEL_KV: KVNamespace;
  THEMARVEL_R2: R2Bucket;
  AI: Ai;
  ENVIRONMENT: string;
  PUBLIC_DOMAIN: string;
  ZERO_TRUST_TEAM_DOMAIN: string;
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204 });
    }

    if (url.pathname === "/health") {
      return json({
        ok: true,
        service: "themarvel-api",
        environment: env.ENVIRONMENT,
        domain: env.PUBLIC_DOMAIN
      });
    }

    if (url.pathname === "/api/v1") {
      return json({ name: "TheMarvel API", version: "1.0.0" });
    }

    return json({ error: "Not Found" }, 404);
  }
};
