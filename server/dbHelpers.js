const db = require('../database/index.js');

module.exports = {
  get: (callback) => {
    db.query(`SELECT* from todolist_rawsql`, callback);
  },
  post: (newTodo, callback) => {
    db.query('INSERT INTO todolist_rawsql (SELECT NULL, ?, false);', newTodo, callback);
  },
  put: (todoId, newTodo, callback) => {
    db.query(`UPDATE todolist_rawsql SET todo = "${newTodo.todo}", completed = ${newTodo.completed} WHERE id = "${todoId}"`, callback);
  },
  delete: (todoId, callback) => {
    db.query(`DELETE FROM todolist_rawsql WHERE id = "${todoId}"`, callback);
  }
};