const jwt = require("jsonwebtoken");
const secrets = require("../secrets/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "You are not authorised" });
      } else {
        req.user = {
          username: decodedToken.username
        };
        next();
      }
    });
  } else {
    res.status(400).json({ message: "can't be found" });
  }
};
