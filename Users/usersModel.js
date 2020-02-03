const db = require('../data/dbConfig');


module.exports = {
    find,
  };

  function find() {
    return db('user').select("id", "name", "email", "username", "password", "bio");
}