const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/')
  .get(controller.get)
  .post(controller.post)
  .put(controller.put)
  .delete(controller.delete);

module.exports = router;