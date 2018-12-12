const db = require('../database/index.js');
const dbHelpers = require('./dbHelpers');

module.exports = {
  get: (req, res) => {
    console.log('GET request received in controller');
    dbHelpers.get((err, data) => {
      if (err) {
        console.log('GET error: ', err);
      } else {
        console.log('GET successful');
        res.status(200).send(data);
      }
    });
  },
  post: (req, res) => {
    console.log('POST request received in controller');
    let { newTodo } = req.body;
    dbHelpers.post(newTodo, (err) => {
      if (err) {
        console.log('POST error : ', err);
      } else {
        console.log('POST successful');
        res.status(201).end();
      }
    });
  },
  put: (req, res) => {
    console.log('PUT request received in controller');
    let { todoId, newTodo } = req.body;
    dbHelpers.put(todoId, newTodo, (err) => {
      if (err) {
        console.log('PUT error: ', err);
      } else {
        console.log('PUT successful');
        res.status(200).end();
      }
    });
  },
  delete: (req, res) => {
    console.log('DELETE request received in controller');
    let { todoId } = req.params;
    dbHelpers.delete(todoId, (err) => {
      if (err) {
        console.log('DELETE error: ', err);
      } else {
        console.log('DELETE successful');
        res.status(200).end();
      }
    });
  }
};