const router = require('express').Router();
const restricted = require("../auth/authenticate-middleware");
// const Travellers = require("../auth/travelers-model");
const User = require('./usersModel');


router.get("/", restricted, (req, res) => {
    User.find()
      .then(traveler => {
        res.json(traveler);
      })
      .catch(err => res.send(err));
  });


  module.exports = router;

