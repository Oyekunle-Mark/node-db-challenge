exports.seed = knex =>
  knex('contexts')
    .truncate()
    .then(() =>
      knex('contexts').insert([
        { context: 'At a library' },
        { context: 'At home' },
        { context: 'Outdoors' },
        { context: 'At a computer' },
        { context: 'At work' },
      ]),
    );
