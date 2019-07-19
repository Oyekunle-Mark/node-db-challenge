const Model = require('../../model/action');
const getActionContext = require('../../model/context');

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

const updateAction = (req, res) => {
  const { id } = req.params;
  const { description, notes, project_id, completed } = req.body;

  Model.updateAction(id, { description, notes, project_id, completed })
    .then(action =>
      res.status(200).json({
        status: 200,
        data: action,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Cannot update action.',
      }),
    );
};

const removeAction = (req, res) => {
  const { id } = req.params;

  Model.removeAction(id)
    .then(action =>
      res.status(200).json({
        status: 200,
        data: `${action} record deleted.`,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Cannot delete action.',
      }),
    );
};

const getActionById = (req, res) => {
  const { id } = req.params;

  Model.getAction(id)
    .then(action => {
      getActionContext(id)
        .then(context => {
          const responseData = action;
          responseData.contexts = context;

          res.status(200).json({
            status: 200,
            data: responseData,
          });
        })
        .catch(() =>
          res.status(500).json({
            status: 500,
            message: 'Cannot update action.',
          }),
        );
    })
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Cannot get action.',
      }),
    );
};

module.exports = {
  addActions,
  getActions,
  getProjectActions,
  updateAction,
  removeAction,
  getActionById,
};
