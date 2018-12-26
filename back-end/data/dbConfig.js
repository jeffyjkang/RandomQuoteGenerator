// import knex (SQL query builder) to connect to db , export to helpers middleware
const knex = require("knex");
const knexConfig = require("../knexfile");

module.exports = knex(knexConfig.development);
