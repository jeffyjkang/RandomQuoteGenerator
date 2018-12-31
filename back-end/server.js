//import express from express framework
const express = require("express");
//import helmet to secure express by setting various HTTP headers
const helmet = require("helmet");
//import morgan HTTP request logger middleware
const morgan = require("morgan");
//inport cors, sross origin resource sharing, allows other domains to make request to api
const cors = require("cors");
const server = express();
// const db = require("./data/dbConfig");

//import routes
const quotes = require("./data/routes/quotes");
const users = require("./data/routes/users");
// const users = require("./data/routes/users");

//import generateToken and authorize
const auth = require("./data/authmiddleware/auth");
//import bcrypt to hash
const bcrypt = require("bcryptjs");

server.get("/", (req, res) => {
  res.send("<h1>Server up and running</h1>");
});

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(cors({ origin: "http://localhost:9000", credentials: true }));

server.use("/quotes", quotes);
server.use("/users", users);

// server.get("/quotes", (req, res) => {
//   db("quotes").then(quotes => {
//     res.status(200).json(quotes);
//   });
// });

server.listen(9000, () => console.log("API running..."));
// run by yarn start
