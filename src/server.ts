import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectToRedis from "./redisClient";

const app = express();

(async () => {
  const client = await connectToRedis();
})();
