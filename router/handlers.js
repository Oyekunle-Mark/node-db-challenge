const Model = require('../model');

const addProjects = (req, res) => {
  const { name, description, completed } = req.body;

  Model.addProjects({ name, description, completed })
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
  const { description, notes, project_id, completed } = req.body;

  Model.addActions({ description, notes, project_id, completed })
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

const getProjectById = (req, res) => {
  const { id } = req.params;

  Model.getProject(id)
    .then(project => {
      Model.getActionsById(id)
        .then(actions => {
          const responseData = project;
          responseData.actions = actions;

          res.status(200).json({
            status: 200,
            data: responseData,
          });
        })
        .catch(() =>
          res.status(500).json({
            status: 500,
            message: 'Cannot get this project actions.',
          }),
        );
    })
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Cannot get project.',
      }),
    );
};

module.exports = {
  addProjects,
  addActions,
  getProjectById,
};
