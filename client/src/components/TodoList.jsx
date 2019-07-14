import React from 'react';

import TodoItem from './TodoItem';
import TodoListContext from '../context/TodoListContext';

const TodoList = () => {
  const { todoList } = React.useContext(TodoListContext);

  return (
    todoList.map((todo, i) => (
      <TodoItem todoItemText={todo} todoItemIndex={i} />
    ))
  );
};

export default TodoList;
