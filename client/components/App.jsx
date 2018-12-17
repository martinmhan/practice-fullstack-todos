import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './List.jsx';
import AddTodoBar from './AddTodoBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount = () => {
    this.getAllTodos();
  };

  getAllTodos = () => {
    axios
      .get('/api')
      .then(({ data }) => {
        this.setState({
          list: data
        });
      });
  }

  addTodo = (todo) => {
    axios
      .post('/api', { todo })
      .then(this.getAllTodos);
  };

  deleteTodo = (todoId) => {
    axios
      .delete('/api', { data: {todoId} })
      .then(this.getAllTodos);
  }

  updateTodo = (todoId, newTodo) => {
    axios
      .put('api', { todoId, newTodo })
      .then(this.getAllTodos);
  }

  render = () => (
    <div>
      <AddTodoBar addTodo={this.addTodo} />
      <List list={this.state.list} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
    </div>
  );
}

export default App;