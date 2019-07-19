const db = require('../data/dbConfig');

const get = id => {
  const query = db('projects');

  return id ? query.where({ id }) : query;
};

const addProjects = async project => {
  const [id] = await db('projects').insert(project);

  return get(id);
};

module.exports = {
  addProjects,
};
