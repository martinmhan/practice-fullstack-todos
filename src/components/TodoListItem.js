const React = require('react');

const TodoListItem = (props) => {
  return (
    <li>
      {props.todo}
      <button>Delete Todo</button>
    </li>
  );
}

module.exports = TodoListItem;