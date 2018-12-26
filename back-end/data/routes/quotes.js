const express = require("express");
const router = express.Router();

const quotesDb = require("../helpers/quotesDb");

// router.get("/", (req, res) => {
//   quotesDb
//     .get()
//     .then(quotes => {
//       res.status(200).json(quotes);
//     })
//     .catch(error => {
//       res.status(500).json({ error: "quotes could not be retrieved" });
//     });
// });

router.get("/", async (req, res) => {
  //   console.log("quotes.get", await quotes.get());
  try {
    const quotes = await quotesDb.get();
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ error: "error getting quotes" });
  }
});

router.post("/", (req, res) => {
  const { textBody, author } = req.body;
  if (!textBody) {
    res.status(400).json({ error: "please input text body" });
  } else if (!author) {
    res.status(400).josn({ error: "please input author" });
  }
  quotesDb
    .insert({ textBody, author })
    .then(quote => res.status(201).json({ textBody, author }))
    .catch(error => {
      res.status(500).json({ error: "there was an error adding quote to db" });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { textBody, author } = req.body;
  if (!textBody) {
    res.status(400).json({ error: "please provide text body" });
  } else if (!author) {
    res.status(400).json({ error: "please provide author" });
  }
  quotesDb
    .update(id, { textBody, author })
    .then(quotes => {
      if (!quotes) {
        res
          .status(404)
          .json({ error: "the quote with the specified ID does not exist" });
      }
      res.status(200).json({ textBody, author });
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "the quote information could not be modified" });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  quotesDb
    .remove(id)
    .then(quotes => {
      if (quotes === 0) {
        res
          .status(404)
          .json({ message: "the quote with the specified ID does not exist" });
      }
      res.status(200).json({ message: "quote deleted" });
    })
    .catch(error => {
      res.status(500).json({ error: "the quote could not be deleted" });
    });
});

module.exports = router;
