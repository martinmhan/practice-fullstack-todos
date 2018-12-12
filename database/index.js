const mongoose = require('mongoose'); // import module

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/tododb', { // connect to database. will create if doesn't exist
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.on('error', () => { console.log('Error connecting to mongodb') });
connection.on('open', () => { console.log('Successfully connected to mongodb') });

module.exports = mongoose;