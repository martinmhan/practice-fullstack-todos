const axios = require('axios');

module.exports = {
  dbGetTodos: () => {
    return axios({
      url: 'http://127.0.0.1;3000/todos',
      method: 'get'
    });
  },
  dbPostTodo: (todo) => {
    axios({
      url: 'http://127.0.0.1;3000/',
      method: 'post',
      data: { todo }
    });
  },
  dbPutTodo: (todoId, newTodo, newCompleted) => {
    axios({
      url: 'http://127.0.0.1;3000/',
      method: 'put',
      data: { todoId, newTodo, newCompleted }
    });
  },
  dbDeleteTodo: (id) => {
    axios({
      url: 'http://127.0.0.1;3000/',
      method: 'delete',
      data: { id }
    })
  }
}