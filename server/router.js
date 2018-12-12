const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/')
  .get(controller.get)
  .post(controller.post)
  .put(controller.put)

router
  .route('/:todoId')
  .delete(controller.delete);

module.exports = router;