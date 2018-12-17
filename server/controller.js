const dbHelpers = require('../database/dbHelpers.js');

module.exports = {
  get: (req, res) => {
    console.log('GET request received');
    dbHelpers.getAllTodos()
      .then(data => {
        res.send(data);
      })
      .catch(err => console.error(err));
  },
  post: (req, res) => {
    const { newTodo } = req.body;
    dbHelpers.addTodo(newTodo)
      .then(() => {
        res.send('todo added successfully');
      })
      .catch(err => console.error(err));
  },
  put: (req, res) => {
    const { todoId, newTodo } = req.body;
    dbHelpers.updateTodo(todoId, newTodo)
      .then(() => {
        res.send('todo updated successfully');
      })
      .catch(err => console.error(err));
  },
  delete: (req, res) => {
    const { todoId } = req.body;
    dbHelpers.deleteTodo(todoId)
      .then(() => {
        res.send('todo deleted successfully');
      })
      .catch(err => console.error(err));
  }
};