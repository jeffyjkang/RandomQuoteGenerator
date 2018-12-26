exports.up = function(knex, Promise) {
  return knex.schema.createTable("quotes", tbl => {
    tbl.increments();
    tbl.string("textBody", 256).notNullable();
    tbl.string("author", 56).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("quotes");
};
