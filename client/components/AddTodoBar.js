const React = require('react');

const AddTodoBar = (props) => {
  return (
    <div>
      <form>
        <input type="text"></input>
        <input type="submit"></input> Add Todo
      </form>
    </div>
  );
}

module.exports = AddTodoBar;