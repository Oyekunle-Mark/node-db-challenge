const router = require('express').Router();
const handlers = require('./handlers');

router.post('/', handlers.addActions);
router.get('/', handlers.getActions);
router.get('/:id', handlers.getProjectActions);

module.exports = router;
