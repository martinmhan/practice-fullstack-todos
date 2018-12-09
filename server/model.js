const db = require('../database/index.js');

module.exports = {
  get: (options, cb) => {
    let query = 'SELECT* FROM todos;';
    
    return db.query(query, options, cb);
  },
  post: () => {

  },
  post: () => {

  },
  delete: () => {

  }
};