const router = require('express').Router();
const handlers = require('./handlers');

router.post('/', handlers.addProjects);
router.get('/:id', handlers.getProjectById);
router.get('/', handlers.getProjects);
router.put('/:id', handlers.updateProject);
router.delete('/:id', handlers.removeProject);

module.exports = router;
