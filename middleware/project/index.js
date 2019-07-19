const Model = require('../../model/project');

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!/^\d+$/.test(id))
    return res.status(400).json({
      status: 400,
      message: 'Request parameter must be an integer',
    });

  Model.getProject(id)
    .then(project => {
      if (!project)
        return res.status(404).json({
          status: 404,
          message: 'No project matches that ID',
        });

      next();
    })
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Error getting project.',
      }),
    );
};

const validateProjectBody = (req, res, next) => {
  const { name, description, completed } = req.body;

  if (!name || !description || !completed) {
    return res.status(400).json({
      status: 400,
      message:
        'Request body must contain name, description and completed fields.',
    });
  }

  next();
};

module.exports = {
  validateId,
  validateProjectBody,
};
