exports.seed = knex =>
  knex('projects')
    .truncate()
    .then(() =>
      knex('projects').insert([
        {
          name: 'portfolio website',
          description: 'Build the best personal page ever seen',
          status: false,
        },
        {
          name: 'make breakfast',
          description: 'breakfast fit for a king',
          status: true,
        },
        {
          name: 'build castles in the air',
          description: 'A floating disney land is want I am making',
          status: false,
        },
        {
          name: 'Complete sprint challenge',
          description: 'Every stretch goal must bite the dust.',
          status: false,
        },
        {
          name: 'Listen to Tupac music',
          description: 'Nobody drops it like Pac.',
          status: true,
        },
      ]),
    );
