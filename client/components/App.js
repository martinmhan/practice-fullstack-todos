const React = require('react');
const TodoList = require('./TodoList.js');
const AddTodoBar = require('./AddTodoBar.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.props.crud.dbGetTodos() // get todos from db
      .then(data => {
        this.setState({
          todos: data
        })
        .catch(err => {
          console.log('Error getting todos from DB: ', err);
        });
      });
  }

  deleteTodo = (index, id) => {
    let todos = [...this.state.todos];
    todos.splice(index, 1); // delete todo on client-side
    this.setState({ todos });
    this.props.crud.dbDeleteTodo(id); // delete todo in database
  };

  updateTodo = (index, id, newTodo, newCompleted) => {
    let todos = [...this.state.todos];
    todos.splice(index, 1, {id, todo: newTodo, completed: newCompleted}); // update todo on client-side
    this.setState({ todos });
    this.props.crud.dbPutTodo(id, newTodo, newCompleted); // update todo in database
  };

  render() {
    return (
      <div>
        <AddTodoBar addTodo={this.props.crud.dbPostTodo}/>
        <TodoList todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
};

module.exports = App;