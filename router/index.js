const router = require('express').Router();
const handlers = require('./handlers');

router.post('/', handlers.addProjects);
router.post('/action', handlers.addActions);
router.get('/:id', handlers.getProjectById);

module.exports = router;
