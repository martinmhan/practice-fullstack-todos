const sequelize = require('sequelize');

const connection = new sequelize('todos', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

connection.sync({force: false}) // establish connection, 
  .then(() => { console.log('Successfully connected to mysql DB') })
  .catch((err) => { console.log('Error connecting to mysql DB: ', err) });

module.exports = connection;