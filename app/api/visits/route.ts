import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

// GET = read visitor count
export async function GET() {
    const visits = await redis.get<number>("portfolio-visits") || 0;

    return Response.json({ visits });
}

// POST = increment visitor count
export async function POST() {
    const visits = await redis.incr("portfolio-visits");

    return Response.json({ visits });
}