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

// router.post("/", (req, res) => {
//   const { textBody, author } = req.body;
//   if (!textBody) {
//     res.status(400).json({ error: "please input text body" });
//   } else if (!author) {
//     res.status(400).json({ error: "please input author" });
//   }
//   quotesDb
//     .insert({ textBody, author })
//     .then(quote => res.status(201).json({ textBody, author }))
//     .catch(error => {
//       res.status(500).json({ error: "there was an error adding quote to db" });
//     });
// });

router.post("/", async (req, res) => {
  const { textBody, author } = req.body;
  if (!textBody) {
    res.status(400).json({ error: "please input text body" });
  } else if (!author) {
    res.status(400).json({ error: "please input author" });
  }
  try {
    //
    const quote = await quotesDb.insert({ textBody, author });
    // console.log("quote", quote) // returns id
    res.status(201).json({ textBody, author });
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error adding a quote to the database" });
  }
});

// router.put("/:id", (req, res) => {
//   const id = req.params.id;
//   const { textBody, author } = req.body;
//   if (!textBody) {
//     res.status(400).json({ error: "please provide text body" });
//   } else if (!author) {
//     res.status(400).json({ error: "please provide author" });
//   }
//   quotesDb
//     .update(id, { textBody, author })
//     .then(quotes => {
//       if (!quotes) {
//         res
//           .status(404)
//           .json({ error: "the quote with the specified ID does not exist" });
//       }
//       res.status(200).json({ textBody, author });
//     })
//     .catch(error => {
//       res
//         .status(500)
//         .json({ error: "the quote information could not be modified" });
//     });
// });

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { textBody, author } = req.body;
  if (!textBody) {
    res.status(400).json({ error: "please provide text body" });
  } else if (!author) {
    res.status(400).json({ error: "please provide author" });
  }
  try {
    //
    const quote = await quotesDb.update(id, { textBody, author });
    if (!quote) {
      res
        .status(404)
        .json({ error: "the quote with the specified ID does not exist" });
    }
    res.status(200).json({ textBody, author });
  } catch (error) {
    res
      .status(500)
      .json({ error: "the quote information could not be modified" });
  }
});

// router.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   quotesDb
//     .remove(id)
//     .then(quotes => {
//       if (quotes === 0) {
//         res
//           .status(404)
//           .json({ message: "the quote with the specified ID does not exist" });
//       }
//       res.status(200).json({ message: "quote deleted" });
//     })
//     .catch(error => {
//       res.status(500).json({ error: "the quote could not be deleted" });
//     });
// });

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    quote = await quotesDb.remove(id);
    console.log(id);
    console.log("quote", quote);
    if (!quote) {
      res
        .status(404)
        .json({ message: "the quote with the specified ID does not exist" });
    }
    res.status(200).json({ message: "quote deleted" });
  } catch (error) {
    res.status(500).json({ error: "the quote could not be deleted" });
  }
});

module.exports = router;
