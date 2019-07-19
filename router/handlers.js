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

module.exports = {
  addProjects,
};
