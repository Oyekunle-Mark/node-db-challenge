const router = require('express').Router();
const handlers = require('./handlers');

router.post('/', handlers.addProjects);
router.get('/:id', handlers.getProjectById);

module.exports = router;
