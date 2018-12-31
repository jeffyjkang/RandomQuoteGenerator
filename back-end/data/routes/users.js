const express = require("express");
const router = express.Router();
const usersDb = require("../helpers/usersDb");
const bcrypt = require("bcryptjs");
const auth = require("../authmiddleware/auth");

router.get("/", async (req, res) => {
  try {
    // const users = await usersDb.get();
    const users = await usersDb.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "error getting users" });
  }
});

router.post("/", async (req, res) => {
  const { usernameInput, passwordInput } = req.body;
  if (!usernameInput) {
    res.status(400).json({ error: "please input username" });
  } else if (!passwordInput) {
    res.status(400).json({ error: "please input password" });
  }
  try {
    const user = await usersDb.insert({ usernameInput, passwordInput });
    //usernameInput must be unique
    res.status(201).json({ usernameInput, passwordInput });
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error adding user to the database" });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { usernameInput, passwordInput } = req.body;
  if (!usernameInput) {
    res.status(400).json({ error: "please provide username" });
  } else if (!passwordInput) {
    res.status(400).json({ error: "please provide password" });
  }
  try {
    const user = await usersDb.update(id, { usernameInput, passwordInput });
    if (!user) {
      res
        .status(404)
        .json({ error: "the user with the specified ID does not exist" });
    }
    res.status(200).json({ usernameInput, passwordInput });
  } catch (error) {
    res
      .status(500)
      .json({ error: "the user information could not be modified" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    user = await usersDb.remove(id);
    if (!user) {
      res
        .status(404)
        .json({ message: "the user with the specified ID does not exist" });
    }
    res.status(200).json({ message: "user deleted" });
  } catch (error) {
    res.status(500).json({ error: "the user could not be deleted" });
  }
});
//users/register due to route
router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.passwordInput, 14);
  user.passwordInput = hash;
  // console.log(hash);
  usersDb.insert(user).then(ids => {
    // console.log(usersDb);
    usersDb
      .get()
      .where({ id: ids[0] })
      .first()
      .then(user => {
        // console.log("user:", user);
        const token = auth.generateToken(user);
        res.status(201).json(token);
      });
  });
});
//users/login due to route
router.post("/login", (req, res) => {
  const credentials = req.body;
  // console.log(credentials);
  usersDb
    .get()
    .where({ usernameInput: credentials.usernameInput })
    .first()
    .then(user => {
      if (
        user &&
        bcrypt.compareSync(credentials.passwordInput, user.passwordInput)
      ) {
        const token = auth.generateToken(user);
        // console.log("token:", token);
        res.send(token);
      } else {
        return res.status(401).json({ error: "Incorrect credentials" });
      }
    })
    .catch(error => {
      res.status(500).json({ error: "error unable to get info" });
    });
});

module.exports = router;
