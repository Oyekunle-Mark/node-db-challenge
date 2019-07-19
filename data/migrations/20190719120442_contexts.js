exports.up = knex =>
  knex.schema.createTable('contexts', table => {
    table.increments();
    table
      .string('context', 50)
      .notNullable()
      .unique();
  });

exports.down = knex => knex.schema.dropTableIfExists('contexts');
