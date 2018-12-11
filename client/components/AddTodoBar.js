const React = require('react');

class AddTodoBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  updateText = (event) => {
    let newText = event.target.value;
    this.setState({ text: newText });
  }

  addTodoHelper = (event) => {
    if (event) { event.preventDefault(); }
    document.getElementById('addTodoInput').value = '';
    this.props.addTodo(this.state.text);
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.addTodoHelper}>
          <input type="text" id="addTodoInput" onChange={this.updateText}></input>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

module.exports = AddTodoBar;