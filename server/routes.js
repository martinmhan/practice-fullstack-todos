const controller = require('./controller.js');
const router = require('express').Router();


router.get('/', controller.get);

router.post('/', controller.post);

router.put('/', controller.put);

router.delete('/', controller.delete);

module.exports = router;