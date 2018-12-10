const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App.js');
const crud = require('./lib/crud.js');

ReactDOM.render(
  <App crud={crud} />,
  document.getElementById('app')
);