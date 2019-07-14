import React from 'react';

import TodoListContext from '../context/TodoListContext';

const AddTodoItemInput = () => {
  const { addTodoItem } = React.useContext(TodoListContext);
  const [newTodoText, updateNewTodoText] = React.useState('');

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          const newTodoTextInput = e.target.value;
          updateNewTodoText(newTodoTextInput);
        }}
      />
      <button
        type="button"
        onClick={() => {
          addTodoItem(newTodoText);
        }}
      >
        Add Todo!
      </button>
    </div>
  );
};

export default AddTodoItemInput;
