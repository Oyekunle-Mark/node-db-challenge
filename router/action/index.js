const router = require('express').Router();
const handlers = require('./handlers');
const middleware = require('../../middleware/action');
const validateProjectId = require('../../middleware/project').validateId;

router.post('/', middleware.validateActionBody, handlers.addActions);
router.get('/', handlers.getActions);
router.get('/:id', middleware.validateId, handlers.getActionById);
router.get('/:id/projects', validateProjectId, handlers.getProjectActions);
router.put(
  '/:id',
  middleware.validateId,
  middleware.validateActionBody,
  handlers.updateAction,
);
router.delete('/:id', middleware.validateId, handlers.removeAction);

module.exports = router;
