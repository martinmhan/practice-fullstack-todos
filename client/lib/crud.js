const axios = require('axios');

module.exports = {
  dbGetTodos: () => {
    return axios({
      method: 'get',
      url: 'http://127.0.0.1:3000/todos'
    });
  },
  dbPostTodo: (todo) => {
    return axios({
      url: 'http://127.0.0.1:3000/',
      method: 'post',
      data: { todo }
    });
  },
  dbPutTodo: (todoId, newTodo, newCompleted) => {
    return axios({
      url: 'http://127.0.0.1:3000/',
      method: 'put',
      data: { todoId, newTodo, newCompleted }
    });
  },
  dbDeleteTodo: (id) => {
    return axios({
      url: 'http://127.0.0.1:3000/',
      method: 'delete',
      data: { todoId: id }
    })
  }
};