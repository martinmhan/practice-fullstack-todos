const TodosCollection = require('../model.js');

const seedData = [
  {
    todo: 'Eat breakfast',
    completed: false
  },
  {
    todo: 'Go to work',
    completed: false
  },
  {
    todo: 'Go running',
    completed: false
  }
];

TodosCollection.insertMany(seedData);