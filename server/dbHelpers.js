const Todo = require('../database/model.js');

module.exports = {
  getAllTodos: () => {
    return Todo.findAll()
  },
  addTodo: (newTodo) => {
    const todo = Todo.build({ name: newTodo });
    return todo.save()
  },
  updateTodo: (todoId, newTodo) => {
    return Todo.update(
      { name: newTodo }
      , {
        where: { id: todoId }
      })
  },
  deleteTodo: (todoId) => {
    return Todo.destroy({
      where: { id: todoId }
    });
  }
};