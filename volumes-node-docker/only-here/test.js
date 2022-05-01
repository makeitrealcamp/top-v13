import { createClient } from "redis";

const get = async () => {
  console.log("Ahsahdhahsdasjfhasjf");
  const client = createClient({
    url: "redis://:password@172.25.0.2:6379",
    //url: 'redis://alice:foobared@awesome.redis.server:6380'
    //redis[s]://[[username][:password]@][host][:port][/db-number]
  });

  //const client = createClient();
  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  await client.set("key", "value");
  const value = await client.get("key");

  console.log("***************");
};

get();
