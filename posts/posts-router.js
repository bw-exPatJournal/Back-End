const router = require('express').Router();

const Posts = require('./posts-model');


// GET REQUESTS - FETCHING POSTS
router.get('/', (req, res) => {
    Posts.get()
    .then(post => {
        res.status(201).json(post)
    })
    .catch(error => {
        res.status(500).json({error: "Post can not be found"})
    })
})

router.get('/:id', (req, res)=> {
    Posts.getById(req.params.id)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(error => {
        res.status(500).json({error: 'Post does not exist'})
    })
})

// POST REQUESTS - ADDING NEW POSTS

router.post('/', (req,res) => {
    Posts.insert(req.body)
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(error => {
        res.status(500).json({error: 'Error adding posts'})
    })
})

// DELETE REQUEST - DELETING POST

router.delete('/:id', (req,res) => {
    Posts.remove(req.params.id)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(error => {
        res.status(500).json({error: 'Post no longer exists'})
    })
})


//PUT REQUEST - EDITING POSTS
router.put('/:id', (req,res) => {
    const changes = req.body
    Posts.update(req.params.id, changes)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        res.status(500).json({error: "Post can't be updated"})
    })
})

module.exports = router;