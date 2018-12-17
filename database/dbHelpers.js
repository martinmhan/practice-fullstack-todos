const Todo = require('./model.js');

module.exports = {
  getAllTodos: () => {
    console.log('getAllTodos');
    return Todo.find({});
  },
  addTodo: (newTodo) => {
    const todo = new Todo({ name: newTodo });
    return todo.save();
  },
  updateTodo: (todoId, newTodo) => {
    return Todo.updateOne({_id: todoId}, {name: newTodo})
  },
  deleteTodo: (todoId) => {
    return Todo.deleteOne({_id: todoId});
  }
}