const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Travellers = require("./travelers-model.js");
const {jwtSecret} = require("../secrets/secrets.js");

router.post("/register", (req, res) => {
  let traveler = req.body;
  const hash = bcrypt.hashSync(traveler.password, 10);

  traveler.password = hash;

  Travellers.register(traveler)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Travellers.findBy({ username })
    .first()
    .then(traveler => {
      if (traveler && bcrypt.compareSync(password, traveler.password)) {
        const token = generateToken(traveler);

        // const decoded = jwt.verify(token, secrets.jwtSecret);
        // console.log(decoded);

        res.status(200).json({
          message: `Welcome ${traveler.username}!`,
          token: token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(traveler) {
  const payload = {
    subject: traveler.id,
    name: traveler.name,
    username: traveler.username,
    bio: traveler.bio

  };

  const options = {
    expiresIn: "7d"
  };

  return jwt.sign(payload, jwtSecret, options);
}



module.exports = router;
