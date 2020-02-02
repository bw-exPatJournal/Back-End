exports.up = function(knex) {
  return knex.schema
    .createTable("traveler", tbl => {
      tbl.increments();
      tbl.string("name", 120);
      tbl.string("email", 120);
      tbl
        .string("username", 120)
        .notNullable()
        .unique();
      tbl.string("password", 120).notNullable();
      tbl.text("bio");
    })
    .createTable("posts", tbl => {
      tbl.increments();
      tbl.text("title");
      tbl.text("photo");
      tbl.text("story");
      tbl.text("details");
      tbl.integer("traveler_id");
    });
};

exports.down = function(knex) {};
