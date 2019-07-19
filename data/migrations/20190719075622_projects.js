exports.up = knex =>
  knex.schema.createTable('projects', table => {
    table.increments();
    table
      .string('name', 50)
      .notNullable()
      .unique();
    table.text('description').notNullable();
    table.boolean('status');
  });

exports.down = knex => knex.schema.dropTableIfExists('projects');
