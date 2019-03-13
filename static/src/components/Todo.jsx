import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => (
  <li className="todo">
    <span>{todo}</span>
    <button type="button">Delete Todo</button>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
};

export default Todo;
