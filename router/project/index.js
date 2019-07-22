const router = require('express').Router();
const handlers = require('./handlers');
const middleware = require('../../middleware/project');

router.post('/', middleware.validateProjectBody, handlers.addProjects);
router.get('/:id', middleware.validateId, handlers.getProjectById);
router.get('/', handlers.getProjects);
router.put(
  '/:id',
  middleware.validateProjectBody,
  middleware.validateId,
  handlers.updateProject,
);
router.delete('/:id', middleware.validateId, handlers.removeProject);

module.exports = router;
