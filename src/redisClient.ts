import { createClient } from "redis";

export default async function connectToRedis() {
  const client = createClient({
    socket: {
      host: process.env.REDIS_HOST || process.env.REDIS_IP,
      port: 6379,
    },
  });

  client.on("connect", function () {
    console.log("Connected to Redis server");
  });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  return client;
}
