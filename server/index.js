const app = require('./app.js');

const PORT = 3000;

app.listen(PORT, err => {
  if (err) {
    console.log('Error connecting to port: ', PORT);
  } else {
    console.log('Successful connection to port: ', PORT);
  }
});