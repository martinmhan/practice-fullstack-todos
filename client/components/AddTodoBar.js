const React = require('react');

class AddTodoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.updateText = this.updateText.bind(this);
    this.addTodoHelper = this.addTodoHelper.bind(this);
  }

  updateText(event) {
    this.setState({
      text: event.target.value
    });
  }

  addTodoHelper(event) {
    event.preventDefault();
    document.getElementById('todoinput').value = '';
    this.props.addTodo(this.state.text);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTodoHelper}>
          Add Todo: <input type="text" onChange={this.updateText} id="todoinput"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

module.exports = AddTodoBar;