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
    console.log('App componentDidMount');
    this.getAllTodos();
  }

  getAllTodos() {
    console.log('getAllTodos');
    axios.get('https://127.0.0.1:3000')
      .then(({ data }) => {
        console.log('got todos');
        console.log(data);
        this.setState({
          list: data
        });
      })
  }

  addTodo(todo) {
    console.log('addTodo');
  }

  updateTodo() {
    console.log('updateTodo');
  }
  
  deleteTodo() {
    console.log('deleteTodo');
  }

  render() {
    console.log('rendering App');
    return (
      <div>
        App Component
        <AddTodoBar />
        <List />
      </div>
    );
  }
}

module.exports = App;