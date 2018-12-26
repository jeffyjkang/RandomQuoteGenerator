const express = require("express");
const router = express.Router();

const quotes = require("../helpers/quotesDb");

router.get("/", (req, res) => {
  quotes.get().then(quotes => {
    res.status(200).json(quotes);
  });
});

module.exports = router;
