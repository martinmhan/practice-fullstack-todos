// const React = require('react');

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo, i) => {
          <TodoListItem todo={todo} index={i} deleteTodo={props.deleteTodo} updateTodo={props.updateTodo}/>
        })}
      </ul>
    </div>
  );
}

module.exports = TodoList;