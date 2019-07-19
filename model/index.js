const db = require('../data/dbConfig');

const getProject = id => {
  const query = db('projects');

  return id ? query.where({ id }).first() : query;
};

const addProjects = async project => {
  const [id] = await db('projects').insert(project);

  return getProject(id);
};

const getAction = id => {
  const query = db('actions');

  return id ? query.where({ id }) : query;
};

const addActions = async action => {
  const [id] = await db('actions').insert(action);

  return getAction(id);
};

const getActionsById = id =>
  db('actions as a')
    .select('a.id', 'a.description', 'a.notes', 'a.completed')
    .where({ project_id: id });

module.exports = {
  addProjects,
  addActions,
  getActionsById,
  getProject,
  getAction,
};
