const Model = require('../../model/action');

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!/^\d+$/.test(id))
    return res.status(400).json({
      status: 400,
      message: 'Request parameter must be an integer',
    });

  Model.getAction(id)
    .then(action => {
      if (!action)
        return res.status(404).json({
          status: 404,
          message: 'No action matches that ID',
        });

      next();
    })
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Error getting action.',
      }),
    );
};

const validateActionBody = (req, res, next) => {
  const { description, notes, project_id, completed } = req.body;

  if (!description || !notes || !project_id || !completed)
    return res.status(400).json({
      status: 400,
      message:
        'Request body must contain notes, description, project_id and completed fields.',
    });

  next();
};

module.exports = {
  validateId,
  validateActionBody,
};
