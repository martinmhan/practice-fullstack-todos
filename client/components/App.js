const React = require('react');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  render() {
    console.log('rendering App');
    return (
      <div>
        App
      </div>
    );
  }
}

module.exports = App;