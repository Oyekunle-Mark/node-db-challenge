const router = require('express').Router();
const handlers = require('./handlers');

router.post('/', handlers.addActions);

module.exports = router;
