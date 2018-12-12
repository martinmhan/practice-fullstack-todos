const controller = require('./controller.js');
const router = require('express').Router();


router
  .route('/')
  .get(controller.get)
  .post(controller.post)
  .put(controller.put);

router
  .route('/:todoId')
  .delete(controller.delete);

module.exports = router;