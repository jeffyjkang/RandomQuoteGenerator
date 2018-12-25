//import express from express framework
const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Server up and running</h1>");
});

server.listen(9000, () => console.log("API running..."));
// run by yarn start
