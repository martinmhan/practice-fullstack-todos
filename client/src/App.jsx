import React from 'react';

import TodoListContext from './context/TodoListContext';
import TodoList from './components/TodoList';
import AddTodoItemInput from './components/AddTodoItemInput';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: ['hello', 'world'],
      addTodoItem: this.addTodoItem,
      deleteTodoItem: this.deleteTodoItem,
      updateTodoItem: this.updateTodoItem,
    };
  }

  addTodoItem = (todoItem) => {
    const { todoList } = this.state;
    const updatedTodoList = [...todoList, todoItem];

    this.setState({ todoList: updatedTodoList });
  };

  deleteTodoItem = (todoItemIndex) => {
    const { todoList } = this.state;
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(todoItemIndex, 1);

    this.setState({ todoList: updatedTodoList });
  };

  updateTodoItem = (todoItemIndex, todoItemText) => {
    const { todoList } = this.state;
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(todoItemIndex, 1, todoItemText);

    this.setState({ todoList: updatedTodoList });
  };

  render() {
    return (
      <TodoListContext.Provider value={this.state}>
        <AddTodoItemInput />
        <TodoList />
      </TodoListContext.Provider>
    );
  }
}

export default App;
