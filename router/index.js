const router = require('express').Router();
const handlers = require('./handlers');

router.post('/', handlers.addProjects);
router.post('/action', handlers.addActions);

module.exports = router;
