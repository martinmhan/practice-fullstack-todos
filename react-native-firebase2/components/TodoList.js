import React from 'react';
import {
  Container,
  Header,
  Content
} from 'native-base';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleCompleted }) => (
  todos.map((todoItem, i) => (
    <TodoItem
      completed={todoItem.completed}
      todoText={todoItem.todoText}
      toggleCompleted={toggleCompleted}
      index={i}
      key={i}
    />
  ))
);

export default TodoList;
