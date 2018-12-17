const Sequelize = require('sequelize');
const connection = require('./index.js');

const Todo = connection.define('todo', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: Sequelize.STRING}
});

Todo.sync();

module.exports = Todo;