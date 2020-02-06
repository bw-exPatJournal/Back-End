const router = require('express').Router();
const restricted = require("../auth/authenticate-middleware");
// const Travellers = require("../auth/travelers-model");
const User = require('./usersModel');


router.get("/", restricted, (req, res) => {
    User.find()
      .then(traveler => {
        res.status(201).json(traveler);
        
      })
      .catch(err => res.send(err))
  });

  router.get("/:id", restricted, (req, res) => {
    User.findById(req.params.id)
      .then(traveler => {
        res.status(201).json(traveler);
        
      })
      .catch(err => res.send(err))
  });


  router.put('/:id', (req,res) => {
    const changes = req.body
    User.update(req.params.id, changes)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        res.status(500).json({error: "User can't be updated"})
    })
})

router.delete('/:id', (req,res) => {
    User.remove(req.params.id)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(error => {
        res.status(500).json({error: 'User no longer exists'})
    })
})


  module.exports = router;

