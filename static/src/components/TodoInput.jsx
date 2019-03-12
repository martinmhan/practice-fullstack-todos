import React from 'react';
import PropTypes from 'prop-types';

const TodoInput = ({ handleTextInput, addTodo }) => (
  <div className="todoinput">
    <input
      type="text"
      onChange={handleTextInput}
    />
    <input type="button" value="Add Todo!!" onClick={addTodo} />
  </div>
);

TodoInput.propTypes = {
  handleTextInput: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default TodoInput;
