const Model = require('../../model');

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

const getProjects = (req, res) =>
  Model.getProject()
    .then(projects =>
      res.status(200).json({
        status: 200,
        data: projects,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Cannot get projects.',
      }),
    );

module.exports = {
  addProjects,
  getProjectById,
  getProjects,
};
