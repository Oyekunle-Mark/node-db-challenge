exports.up = knex =>
  knex.schema.createTable('actionContexts', table => {
    table.increments();
    table
      .integer('action_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('actions')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .integer('context_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('contexts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });

exports.down = knex => knex.schema.dropTableIfExists('actionContexts');
