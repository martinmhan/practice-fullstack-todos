const TodosCollection = require('./model.js');

module.exports = {
  getAllTodos: () => {
    console.log('dbHelpers getAllTodos');
    return TodosCollection.find();
  },
  addTodo: (todo, callback) => {
    consolel.log('dbHelpers addTodo');
    let newTodo = new TodosCollection(todo);
    return newTodo
      .save(callback);
  },
  updateTodo: (todoId, updatedTodo) => {
    console.log('dbHelpers updateTodo');
    return TodosCollection.findOneAndUpdate(
      { _id: todoId },
      updatedTodo
    )
  },
  deleteTodo: (todoId) => {
    console.log('dbHelpers delete');
    return TodosCollection.findOneAndDelete(
      {_id: todoId}
    );
  }
};