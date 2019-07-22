exports.seed = knex =>
  knex('actions')
    .truncate()
    .then(() =>
      knex('actions').insert([
        {
          description: 'Choose a library',
          notes: 'React seems like a good choice',
          project_id: 1,
          completed: true,
        },
        {
          description: 'Heat and oil',
          notes: 'Something hot and spicy',
          project_id: 2,
          completed: true,
        },
        {
          description: 'Doing the impossible',
          notes: 'You need to dream a lot for this to happen.',
          project_id: 3,
          completed: false,
        },
        {
          description: 'The highlight of my day.',
          notes: 'Drop it like its hot',
          project_id: 4,
          completed: false,
        },
        {
          description: 'Some gangster rap to sooth the soul',
          notes:
            'Changes, mama, brenda got a baby and ghetto gospel ara all good joints',
          project_id: 5,
          completed: true,
        },
        {
          description: 'write truck loads of middleware.',
          notes: 'i see no other way',
          project_id: 6,
          completed: false,
        },
      ]),
    );
