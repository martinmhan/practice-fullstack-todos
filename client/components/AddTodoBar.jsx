import React, { Component } from 'react';

class AddTodoBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleChange = (event) => {
    const query = event.target.value;
    this.setState({ query });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const todo = this.state.query;
    this.props.addTodo(todo);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}></input>
          <input type="submit" value="Add Todo!"></input>
        </form>
      </div>
    );
  }
}

export default AddTodoBar;