const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Otro mensaje  YYYYYYYYYYYYYYYYYYYY !!!!");
});

app.listen(4005, () => {
  console.log("Server listening in port 4005");
});
