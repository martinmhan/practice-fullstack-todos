import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <ul className="todolist">
    {todos.map(todo => (
      <Todo todo={todo} />
    ))}
  </ul>
);

export default TodoList;
