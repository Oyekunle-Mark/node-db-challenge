const Model = require('../model');

const addProjects = (req, res) => {
  const { name, description, status } = req.body;

  Model.addProjects({ name, description, status })
    .then(project =>
      res.status(201).json({
        status: 201,
        data: project,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Cannot add project.',
      }),
    );
};

const addActions = (req, res) => {
  const { description, notes, project_id, status } = req.body;

  Model.addActions({ description, notes, project_id, status })
    .then(action =>
      res.status(201).json({
        status: 201,
        data: action,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Cannot add action.',
      }),
    );
};

module.exports = {
  addProjects,
  addActions,
};
