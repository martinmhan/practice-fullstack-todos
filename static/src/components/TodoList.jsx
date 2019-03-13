import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo }) => (
  <ul className="todolist">
    {todos.map(todo => (
      <Todo todo={todo} deleteTodo={deleteTodo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
