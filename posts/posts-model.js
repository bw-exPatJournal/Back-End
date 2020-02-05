const db = require('../data/dbConfig');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
}

function get() {
    return db('posts')
    // .select('id','title', 'photo', 'story', 'details', '')
}

function getById(id) {
    return db('posts').where({id})
    .first()

}

function insert(user) {
    return db('posts')
    .insert(user)
    .then(ids => {
        return getById(ids[0])
    })
}

function update(id, changes) {
return db('posts')
    .where({id})
    .update(changes)
}

function remove(id){
    return db('posts')
    .where('id',id)
    .del();
}