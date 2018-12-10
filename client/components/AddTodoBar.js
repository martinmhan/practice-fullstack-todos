const React = require('react');

class AddTodoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  updateText = (event) => {
    let text = event.target.value;
    this.setState({ text });
  }

  addTodoHelper = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
    document.getElementById('addTodoInput').value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTodoHelper}>
          <input type="text" id="addTodoInput" onChange={this.updateText}></input>
          <input type="submit" value="Add Todo"></input>
        </form>
      </div>
    );
  }
};

module.exports = AddTodoBar;