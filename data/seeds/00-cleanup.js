exports.seed = async knex => {
  await knex("travellers").truncate();
  await knex("posts").truncate();
};
