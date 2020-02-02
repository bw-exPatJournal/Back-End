exports.seed = async knex => {
  await knex("traveler").truncate();
  await knex("posts").truncate();
};
