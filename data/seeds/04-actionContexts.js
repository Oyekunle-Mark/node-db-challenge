exports.seed = knex =>
  knex('actionContexts')
    .truncate()
    .then(() =>
      knex('actionContexts').insert([
        { action_id: 1, context_id: 4 },
        { action_id: 1, context_id: 2 },
        { action_id: 2, context_id: 2 },
        { action_id: 3, context_id: 3 },
        { action_id: 4, context_id: 4 },
        { action_id: 5, context_id: 5 },
        { action_id: 6, context_id: 4 },
        { action_id: 4, context_id: 5 },
        { action_id: 1, context_id: 1 },
      ]),
    );
