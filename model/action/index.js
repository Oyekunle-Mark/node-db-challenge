const db = require('../../data/dbConfig');

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

const updateAction = (id, action) =>
  db('actions')
    .where({ id })
    .update(action)
    .then(() => getAction(id));

const removeAction = id =>
  db('actions')
    .where({ id })
    .del();

module.exports = {
  addActions,
  getActionsById,
  getAction,
  updateAction,
  removeAction,
};
