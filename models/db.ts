import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const env = Deno.env.toObject();
const DB_URL = env.DB_URL || "mongodb://localhost:27017";
const client = new MongoClient();

client.connectWithUri(DB_URL);

const db = client.database("todos");

export default db;
