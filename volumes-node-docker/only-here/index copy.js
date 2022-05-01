import express from "express";
import { createClient } from "redis";

const app = express();

app.get("/", async (req, res) => {
  console.log("Ahsahdhahsdasjfhasjf");
  const client = createClient({
    url: "redis://:password@172.25.0.2:6379",
  });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  await client.set("holalalal", "value");
  const value = await client.get("key");

  res.send("<h1>PAsssssssssssssssss</h1>");
});

app.listen(4000, () => {
  console.log("Sever on port 4000 ...");
});
