import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, deleteTodo, updateTodo }) => (
  <li className="todo">
    <span>{todo}</span>
    <button type="button" onClick={() => { deleteTodo(todo); }}>Delete Todo</button>
    <button type="button" onClick={() => { updateTodo(todo, prompt('Please insert the updated todo')); }}>Update Todo</button>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default Todo;
