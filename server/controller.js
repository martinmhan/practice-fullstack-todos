const dbHelpers = require('../database/dbHelpers.js');

module.exports = {
  get: (req, res) => {
    console.log('controller get');
    dbHelpers.getAllTodos()
      .then((data) => {
        console.log('GET request successful');
        res.status(201).send(data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  post: (req, res) => {
    console.log('controller post');
    let newTodo = req.body;
    dbHelpers.addTodo(newTodo, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send('POST request successful!');
        console.log('POST request sucessful');
      }
    });
  },
  put: (req, res) => {
    console.log('controller put');
    let todoId = req.body.todoId;
    let newTodo = req.body.newTodo;
    dbHelpers.updateTodo(todoId, newTodo)
      .then(() => {
        console.log('PUT request successful')
      })
      .catch((err) => {
        console.log(err);
      });
  },
  delete: (req, res) => {
    console.log('controller delete');
    let { todoId } = req.params;
    dbHelpers.deleteTodo(todoId)
      .then(() => {
        console.log('DELETE request successful');
        res.status(200).send();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};