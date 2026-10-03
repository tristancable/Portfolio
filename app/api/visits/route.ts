import { Redis } from "@upstash/redis";

const redis =
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
        ? Redis.fromEnv()
        : null;

function unavailable() {
    return Response.json({ error: "Visitor counter unavailable" }, { status: 503 });
}

// GET = read visitor count
export async function GET() {
    if (!redis) return unavailable();

    try {
        const visits = await redis.get<number>("portfolio-visits") || 0;
        return Response.json({ visits });
    } catch {
        return unavailable();
    }
}

// POST = increment visitor count
export async function POST() {
    if (!redis) return unavailable();

    try {
        const visits = await redis.incr("portfolio-visits");
        return Response.json({ visits });
    } catch {
        return unavailable();
    }
}