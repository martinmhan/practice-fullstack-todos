const Sequelize = require('sequelize');
const connection = new Sequelize(
  'todos', // db name
  'root', // username
  '', // password
  { // options
    host: 'localhost',
    dialect: 'mysql'
  }
);

connection
  .authenticate()
  .then(() => {
    console.log('Successfully connected to mysql');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = connection;