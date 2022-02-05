/**
 * npm init: para crear archivo package.json
 */

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(4000, () => {
  console.log("Initialized server...");
});
