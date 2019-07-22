const db = require('../../data/dbConfig');

const getActionContext = id =>
  db('actionContexts as a')
    .select('c.context')
    .join('contexts as c', 'a.context_id', 'c.id')
    .where({ action_id: id });

module.exports = getActionContext;
