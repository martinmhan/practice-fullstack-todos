const mongoose = require('./index.js');

const TodoSchema = new mongoose.Schema({
  name: 'string'
});

const Todo = mongoose.model('todo2', TodoSchema);

module.exports = Todo;