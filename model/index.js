const db = require('../data/dbConfig');

const addProjects = project => db('projects').insert(project);

module.exports = {
  addProjects,
};
