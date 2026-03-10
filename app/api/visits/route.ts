import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET() {
    const visits = await redis.incr("portfolio-visits");

    return Response.json({ visits });
}