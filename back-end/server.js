//import express from express framework
const express = require("express");
const server = express();
const db = require("./data/dbConfig");

//import routes
const quotes = require("./data/routes/quotes");
const users = require("./data/routes/users");
// const users = require("./data/routes/users");

server.get("/", (req, res) => {
  res.send("<h1>Server up and running</h1>");
});

server.use(express.json());

server.use("/quotes", quotes);
server.use("/users", users);

// server.get("/quotes", (req, res) => {
//   db("quotes").then(quotes => {
//     res.status(200).json(quotes);
//   });
// });

server.listen(9000, () => console.log("API running..."));
// run by yarn start
