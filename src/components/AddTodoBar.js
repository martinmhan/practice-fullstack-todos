const React = require('react');

class AddTodoBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <div>
        <form action="">
          <input type="text"></input>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

module.exports = AddTodoBar;