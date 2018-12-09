const React = require('react');
const TodoList = require('./Todolist');
const AddTodoBar = require('./AddTodoBar');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['walk the dog', 'do the laundry', 'brush my teeth']
    };
  }

  render() {
    return (
      <div>
        <AddTodoBar />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

module.exports = App;