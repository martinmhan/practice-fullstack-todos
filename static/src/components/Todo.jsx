import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, deleteTodo }) => (
  <li className="todo">
    <span>{todo}</span>
    <button type="button" onClick={() => { deleteTodo(todo); }}>Delete Todo</button>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
