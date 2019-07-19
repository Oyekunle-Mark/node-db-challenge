const router = require('express').Router();
const handlers = require('./handlers');

router.post('/', handlers.addActions);
router.get('/', handlers.getActions);
router.get('/:id', handlers.getProjectActions);
router.put('/:id', handlers.updateAction);
router.delete('/:id', handlers.removeAction);

module.exports = router;
