const mongoose = require('mongoose');

// mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/tododb', {
  useNewUrlParser: true
});

module.exports = mongoose;