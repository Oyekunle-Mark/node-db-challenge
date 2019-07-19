const Model = require('../../model/action');

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

const getActions = (req, res) =>
  Model.getAction()
    .then(actions =>
      res.status(200).json({
        status: 200,
        data: actions,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Cannot get actions.',
      }),
    );

const getProjectActions = (req, res) => {
  const { id } = req.params;

  Model.getActionsById(id)
    .then(actions =>
      res.status(200).json({
        status: 200,
        data: actions,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Cannot get actions.',
      }),
    );
};

module.exports = {
  addActions,
  getActions,
  getProjectActions,
};
