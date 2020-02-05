const db = require('../data/dbConfig');


module.exports = {
    find,
    findById,
    update,
    remove
  };

  function find() {
    return db('traveler').select("id", "name", "email", "username", "bio");
}

function findById(id){
    return db('traveler')
    .where({id})
    .first();
}


function update(id, changes) {
    return db('traveler')
        .where({id})
        .update(changes)
    }

    function remove(id){
        return db('traveler')
        .where('id',id)
        .del();
    }