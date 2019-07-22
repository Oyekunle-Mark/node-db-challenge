exports.seed = knex =>
  knex('projects')
    .truncate()
    .then(() =>
      knex('projects').insert([
        {
          name: 'portfolio website',
          description: 'Build the best personal page ever seen',
          completed: false,
        },
        {
          name: 'make breakfast',
          description: 'breakfast fit for a king',
          completed: true,
        },
        {
          name: 'build castles in the air',
          description: 'A floating disney land is want I am making',
          completed: false,
        },
        {
          name: 'Complete sprint challenge',
          description: 'Every stretch goal must bite the dust.',
          completed: false,
        },
        {
          name: 'Listen to Tupac music',
          description: 'Nobody drops it like Pac.',
          completed: true,
        },
        {
          name: 'validate endpoints',
          description: 'this makes a more pleasurable developer experience',
          completed: false,
        },
      ]),
    );
