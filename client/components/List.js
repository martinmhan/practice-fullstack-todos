const React = require('react');
const ListItem = require('./ListItem.js');

const List = (props) => {
  return (
    <div>
      <ul>
        {props.list.map((item, i) => (
          <ListItem item={item} index={i} key={i} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo}/>  
        ))}
      </ul>
    </div>
  )
}

module.exports = List;