const router = require('express').Router();
const handlers = require('./handlers');

router.post('/', handlers.addProjects);

module.exports = router;
