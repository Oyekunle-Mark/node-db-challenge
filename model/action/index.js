const db = require('../../data/dbConfig');

const getAction = id => {
  const query = db('actions');

  return id ? query.where({ id }).first() : query;
};

const addActions = async action => {
  const [id] = await db('actions').insert(action);

  return getAction(id);
};

const getActionsById = id =>
  db('actions')
    .select('id', 'description', 'notes', 'completed')
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
