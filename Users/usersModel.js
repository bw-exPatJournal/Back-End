const db = require('../data/dbConfig');


module.exports = {
    find
  };

  function find() {
    return db('traveler').select("id", "name", "email", "username", "password", "bio");
}