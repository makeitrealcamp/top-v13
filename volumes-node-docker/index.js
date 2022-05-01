import express from "express";
import fetch from "node-fetch";
import { createClient } from "redis";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  const { info } = data;
  const { count } = info;

  const client = createClient({
    url: "redis://:password@172.23.0.2:6379",
  });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  // set redis database key
  await client.set("count_charachters", count);

  res.json(data);
});

app.get("/get", async (req, res) => {
  /*const client = createClient({
    url: "redis://:password@172.23.0.2:6379",
  });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  // get redis database key
  const value = await client.get("count_charachters");

  res.send(value);*/

  res.json({ message: "hola" });
});

app.listen(4000, () => {
  console.log("Sever on port 4000 ...");
});
