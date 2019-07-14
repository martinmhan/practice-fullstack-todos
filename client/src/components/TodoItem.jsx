import React from 'react';
import PropTypes from 'prop-types';

import TodoListContext from '../context/TodoListContext';

const TodoItem = ({ todoItemText, todoItemIndex }) => {
  const [todoTextInput, updateTodoTextInput] = React.useState('');
  const { deleteTodoItem, updateTodoItem } = React.useContext(TodoListContext);

  const textInputChangeHandler = (e) => {
    const newTodoTextInput = e.target.value;

    updateTodoTextInput(newTodoTextInput);
  };

  return (
    <div>
      {todoItemText}
      <input
        type="text"
        value={todoTextInput}
        onChange={textInputChangeHandler}
      />
      <button
        type="button"
        onClick={() => {
          updateTodoTextInput('');
          updateTodoItem(todoItemIndex, todoTextInput);
        }}
      >
        Update Todo
      </button>
      <button
        type="button"
        onClick={() => {
          deleteTodoItem(todoItemIndex);
        }}
      >
        Delete Todo
      </button>
    </div>
  );
};


TodoItem.propTypes = {
  todoItemText: PropTypes.string.isRequired,
  todoItemIndex: PropTypes.number.isRequired,
};

export default TodoItem;
