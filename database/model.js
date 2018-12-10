const sequelize = require('sequelize');
const connection = require('./index.js');

const todolist = connection.define('todolist', 
  {
    id: {
      type: sequelize.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    todo: {
      type: sequelize.STRING,
      allowNull: false
    },
    completed: {
      type: sequelize.BOOLEAN,
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
);

module.exports = todolist;