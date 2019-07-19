exports.up = knex =>
  knex.schema.createTable('actions', table => {
    table.increments();
    table
      .string('description', 250)
      .notNullable()
      .unique();
    table.text('notes').notNullable();
    table
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.boolean('status');
  });

exports.down = knex => knex.schema.dropTableIfExists('actions');
