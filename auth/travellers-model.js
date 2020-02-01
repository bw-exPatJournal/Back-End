const db = require("../data/dbConfig.js");

module.exports = {
  register,
  find,
  findBy,
  findById
};

function find() {
  return db("travellers").select(
    "id",
    "name",
    "email",
    "username",
    "password",
    "bio"
  );
}

function findBy(filter) {
  return db("travellers").where(filter);
}

async function register(user) {
  const [id] = await db("travellers").insert(traveller);

  return findById(id);
}

function findById(id) {
  return db("travellers")
    .where({ id })
    .first();
}
