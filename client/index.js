const App = require('./components/App.js');
const ReactDOM = require('react-dom');
const React = require('react');
const crud = require('./lib/crud');

ReactDOM.render(
  <App crud={crud}/>,
  document.getElementById('app')
);