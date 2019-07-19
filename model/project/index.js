const db = require('../../data/dbConfig');

const getProject = id => {
  const query = db('projects');

  return id ? query.where({ id }).first() : query;
};

const addProjects = async project => {
  const [id] = await db('projects').insert(project);

  return getProject(id);
};

const updateProject = (id, project) =>
  db('projects')
    .where({ id })
    .update(project)
    .then(() => getProject(id));

module.exports = {
  addProjects,
  getProject,
  updateProject,
};
