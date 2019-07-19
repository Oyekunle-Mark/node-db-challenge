const db = require('../../data/dbConfig');

const getProject = id => {
  const query = db('projects');

  return id ? query.where({ id }).first() : query;
};

const addProjects = async project => {
  const [id] = await db('projects').insert(project);

  return getProject(id);
};

module.exports = {
  addProjects,
  getProject,
};
