const db = require('../database/index.js');

module.exports = {
  get: (req, res) => {
    db.query('SELECT* from todolist', (err, data) => {
      if (err) {
        console.log('GET error: ', err);
      } else {
        console.log('GET successful');
        res.status(200).send(data);
      }
    });
  },
  post: (req, res) => {
    let newTodo = req.body.todo;
    db.query('INSERT INTO todolist (SELECT NULL, ?, false);', newTodo, (err) => {
      if (err) {
        console.log('POST error : ', err);
      } else {
        console.log('POST successful');
        res.status(201).end();
      }
    });
  },
  put: (req, res) => {
    let oldTodo = req.body.oldTodo;
    let newTodo = req.body.newTodo;
    db.query(`UPDATE todolist SET todo = "${newTodo}"`, { todo: oldTodo }, (err) => {
      if (err) {
        console.log('PUT error: ', err);
      } else {
        console.log('PUT successful');
        res.status(200).end();
      }
    });
  },
  delete: (req, res) => {
    let todo = req.body.todo;
    db.query(`DELETE FROM todolist`, { todo }, (err) => {
      if (err) {
        console.log('DELETE error: ', err);
      } else {
        console.log('DELETE successful');
        res.status(200).end();
      }
    });
  }
};