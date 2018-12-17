const dbHelpers = require('./dbHelpers.js');

module.exports = {
  get: (req, res) => {
    dbHelpers.getAllTodos()
      .then(data => {
        console.log('Successfully retrieved todos');
        res.send(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send();
      });
  },
  post: (req, res) => {
    const { todo } = req.body;
    dbHelpers.addTodo(todo)
      .then(() => {
        console.log('sucessfully added new todo');
        res.send('added new todo');
      })
      .catch((err) => {
        console.error(err);
      });
  },
  put: (req, res) => {
    const { todoId, newTodo } = req.body;
    dbHelpers.updateTodo(todoId, newTodo)
      .then(() => {
        console.log('Successfully updated todo');
        res.send('sucessfully updated todo');
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send();
      });
  },
  delete: (req, res) => {
    console.log('DELETE request recieved');
    const { todoId } = req.body;
    console.log(todoId);
    dbHelpers.deleteTodo(todoId)
    .then(() => {
      console.log('Successfully deleted todo');
      res.send('Successfully deleted todo');
    })
    .catch((err) => {
      console.error(err);
      res.status(404).send();
    });
  }
};