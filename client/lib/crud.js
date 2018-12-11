const $ = require('jquery');

module.exports = {
  dbGetTodos: () => {
    return $.ajax({
      method: 'GET',
      url: 'http://127.0.0.1:3000/todos',
      success: () => {
        console.log('GET request successful');
      },
      error: (jqXHR, textStatus, err) => {
        console.log('Error: ', err);
      }
    });
  },

  dbAddTodo: (todo) => {
    $.ajax({
      method: 'POST',
      url: 'http://127.0.0.1:3000',
      data: { todo },
      success: () => {
        console.log('POST request successful');
      },
      error: (jqXHR, textStatus, err) => {
        console.log('Error: ', err);
      }
    });
  },
  dbDeleteTodo: (todo) => {
    $.ajax({
      method: 'DELETE',
      url: 'http://127.0.0.1:3000',
      data: { todo },
      error: (jqXHR, textStatus, err) => {
        console.log('Error: ', err);
      }
    });
  },
  dbUpdateTodo: (oldTodo, newTodo) => {
    $.ajax({
      method: 'PUT',
      url: 'http://127.0.0.1:3000',
      data: { oldTodo, newTodo },
      error: (jqXHR, textStatus, err) => {
        console.log('Error: ', err);
      }
    });
  }
};