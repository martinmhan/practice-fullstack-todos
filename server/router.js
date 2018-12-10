const router = require('express').Router();
const controller = require('./controller.js');

router.get('/todos', controller.get);

router.post('/', controller.post);

router.put('/', controller.put);

router.delete('/', controller.delete);

module.exports = router;