const mongoose = require('./index.js');

const TodoSchema = mongoose.Schema({ //define schema for collection
  id: Number,
  todo: String,
  completed: Boolean
});

const TodosCollection = mongoose.model('todo', TodoSchema); // create collection

module.exports = TodosCollection; // export collection