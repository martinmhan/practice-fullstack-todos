const React = require('react');
const TodoListItem = require('./TodoListItem.js');

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo, i) => (
          <TodoListItem todo={todo} index={i}/>
        ))}
      </ul>
    </div>
  );
};

module.exports = TodoList;