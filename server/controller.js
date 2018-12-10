const sequelize = require('sequelize');
const todolist = require('../database/model.js');

const controller = {
  get: (req, res) => {
    console.log('GET request received');
    todolist.findAll()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        console.log('Error getting data: ', err);
        res.status(404).end();
      });
  },
  post: (req, res) => {
    console.log('POST request received');
    let todo = req.body.todo;
    todolist.create({ todo, completed: false })
      .then(data => {
        res.status(201).send('POST request successful');
      })
      .catch(err => {
        console.log('Error posting data: ', err);
        res.status(404).end();
      });
  },
  put: (req, res) => {
    console.log('PUT request received');
    let id = req.body.todoId;
    let newTodo = req.body.newTodo;
    let newCompleted = req.body.completed;
    todolist.update(
      { todo: newTodo, completed: newCompleted },
      {where: { id }}
    )
      .then(() => {
        res.status(202).send('PUT request successful');
      })
      .catch(err => {
        console.log('Error updating data: ', err);
        res.status(404).end();
      })
  },
  delete: (req, res) => {
    console.log('DELETE request received');
    let id = req.body.todoId;
    todolist.destroy(
      {where: { id }}
    )
      .then(() => {
        res.status(200).send('DELETE request successful');
      })
      .catch(err => {
        console.log('Error deleting data: ', err);
        res.status(404).end();
      });
  }
};

module.exports = controller;