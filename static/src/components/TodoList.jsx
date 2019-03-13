import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, updateTodo }) => (
  <ul className="todolist">
    {todos.map(todo => (
      <Todo todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoList;
