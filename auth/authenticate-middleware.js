const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../secrets/secrets.js");


module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "You are not authorized" });
      } else {
        req.user = {username: decodedToken.username}
        next();
      }
    });
  } else {
    res.status(400).json({ message: "can't be found" });
  }
};
