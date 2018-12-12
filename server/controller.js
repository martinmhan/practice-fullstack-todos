const dbHelpers = require('../database/dbHelpers.js');

module.exports = {
  get: (req, res) => {
    dbHelpers.getAllTodos()
      .then((data) => {
        res.status(201).send(data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  post: (req, res) => {
    let { newTodo } = req.body;
    dbHelpers.addTodo(newTodo)
      .then(() => {
        res.status(200).send('POST successful');
      })
      .catch(err => console.log(err));
  },
  put: (req, res) => {
    let { todoId } = req.body;
    let { newTodo } = req.body;
    dbHelpers.updateTodo(todoId, newTodo)
      .then(() => {
        res.status(200).send('PUT successful');
      })
      .catch((err) => {
        console.log(err);
      });
  },
  delete: (req, res) => {
    let { todoId } = req.params;
    dbHelpers.deleteTodo(todoId)
      .then(() => {
        res.status(200).send('DELETE successful');
      })
      .catch((err) => {
        console.log(err);
      });
  }
};