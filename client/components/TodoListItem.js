const React = require('react');

const TodoListItem = (props) => {
  return (
    <li>
      {props.todo.todo}
      <button onClick={() => {this.props.crud.dbPostTodo()}}>Toggle Completed</button>
      <button onClick={}>Delete Todo</button>
      <button onClick={}>Update Todo</button>
    </li>
  );
};

module.exports = TodoListItem;

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       completed: false
//     }
//   }

//   componentDidMount() {
//     this.setState({
//       completed: this.props.todo.completed
//     });
//   }

//   toggleCompleted = () => {
//     this.setState({
//       completed: !this.state.completed
//     });
//     this.props.crud.dbPutTodo(
//       this.props.todo.id,
//       this.props.todo.todo,
//       this.state.completed
//     );
//   }

//   updateTodo = () => {
//     this.props.crud.dbPutTodo(
//       this.props.todo.id,
      
//     )
//   }

//   render() {
//     return(
//       <li>
//         {props.todo.todo}
//         <button onClick={ () => {this.toggleCompleted(this.props.todo.id)} }>Toggle Completed</button>
//         <button>Delete Todo</button>
//         <button>Update Todo</button>
//       </li>
//     );
//   }
// };

