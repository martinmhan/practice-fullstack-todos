const TodosCollection = require('./model.js');

module.exports = {
  getAllTodos: () => {
    return TodosCollection.find();
  },
  addTodo: (todo, callback) => {
    let newTodo = new TodosCollection({ todo, completed: false })
    return newTodo.save();
  },
  updateTodo: (todoId, updatedTodo) => {
    return TodosCollection.findOneAndUpdate(
      { _id: todoId },
      { todo: updatedTodo }
    )
  },
  deleteTodo: (todoId) => {
    return TodosCollection.findOneAndDelete(
      {_id: todoId}
    );
  }
};