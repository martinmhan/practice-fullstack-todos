import React from 'react';

const defaultValue = ['hello', 'world'];

const TodoListContext = React.createContext({
  todoList: defaultValue,
  addTodoItem: () => {},
  deleteTodoItem: () => {},
  updateTodoItem: () => {},
});

export default TodoListContext;
