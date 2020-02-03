const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const usersRouter = require('../Users/usersRouter');
const postsRouter = require('../posts/posts-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use('/api/posts', postsRouter)
server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
    res.send(`<h2>IT'S WORKING!</h2>`);
  });


module.exports = server;
