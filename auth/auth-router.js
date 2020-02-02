const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Travellers = require("./travelers-model.js");
const restricted = require("./authenticate-middleware.js");
const secrets = require("../secrets/secrets.js");

router.post("/register", (req, res) => {
  let traveler = req.body;
  const hash = bcrypt.hashSync(traveler.password, 10);
  user.password = hash;

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
    .then(traveller => {
      if (traveller && bcrypt.compareSync(password, traveler.password)) {
        const token = generateToken(traveler);

        const decoded = jwt.verify(token, secrets.jwtSecret);
        console.log(decoded);

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
    username: traveler.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

router.get("/users", restricted, (req, res) => {
  Travellers.find()
    .then(travellers => {
      res.json({ loggedInTraveler: req.username, travelers });
    })
    .catch(err => res.send(err));
});

module.exports = router;
