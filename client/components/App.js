const React = require('react');
const List = require('./List.js');
const AddTodoBar = require('./AddTodoBar.js');
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.getAllTodos = this.getAllTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    axios.get('/api')
      .then(({ data }) => {
        this.setState({
          list: data
        });
      })
  }

  addTodo(newTodo) {
    axios.post(
      '/api',
      { newTodo }
    )
      .then(this.getAllTodos);
  }

  updateTodo(todoId, newTodo) {
    axios.put(
      '/api',
      { todoId, newTodo }
    )
      .then(this.getAllTodos);
  }
  
  deleteTodo(todoId) {
    axios.delete(
      `/api/${todoId}`
    )
      .then(this.getAllTodos);
  }

  render() {
    return (
      <div>
        <AddTodoBar addTodo={this.addTodo}/>
        <List list={this.state.list} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

module.exports = App;