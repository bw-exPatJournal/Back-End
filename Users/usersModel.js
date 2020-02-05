const db = require('../data/dbConfig');


module.exports = {
    find,
    findById
  };

  function find() {
    return db('traveler').select("id", "name", "email", "username", "bio");
}

function findById(id){
    return db('traveler')
    .where({id})
    .first();
}