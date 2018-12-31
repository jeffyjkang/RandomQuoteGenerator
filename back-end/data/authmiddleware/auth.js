require("dotenv").config();

// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function generateToken(user) {
  const secret = process.env.SECRET;
  const payload = {
    subject: user.id,
    username: user.usernameInput
  };
  const options = {
    expiresIn: "1h"
  };
  return jwt.sign(payload, secret, options);
}

function authorize(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.SECRET, (error, decodedToken) => {
      if (error) {
        return res.status(401).json({ error: "token invalid" });
      }
      req.decodedToken = decodedToken;
      next();
    });
  } else {
    res.status(401).json({ message: "no token provided" });
  }
}

module.exports = { generateToken, authorize };
