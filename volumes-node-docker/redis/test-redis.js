import { createClient } from "redis";

const testDataRedis = async () => {
  const client = createClient({
    url: "redis://:password@172.23.0.2:6379",
    //url: 'redis://alice:foobared@awesome.redis.server:6380'
    //redis[s]://[[username][:password]@][host][:port][/db-number]
  });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  await client.set("name", "maria giraldo");
  const value = await client.get("name");
  console.log("VALUE ", value);
};

testDataRedis();
