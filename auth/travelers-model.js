const db = require("../data/dbConfig.js");

module.exports = {
  register,
  find,
  findBy,
  findById
};

function find() {
  return db("traveler as t")
    .join("posts as p", "p.traveler_id", "t.id")
    .select("id", "name", "email", "username", "password", "bio");
}

function findBy(filter) {
  return db("traveler").where(filter);
}

async function register(user) {
  const [id] = await db("traveler").insert(traveller);

  return findById(id);
}

function findById(id) {
  return db("traveler")
    .where({ id })
    .first();
}
