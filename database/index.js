const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'todos'
});

dbConnection.connect((err) => {
  if (err) {
    console.log('Error connecting to SQL database: ', err);
  } else {
    let query = `
      CREATE TABLE IF NOT EXISTS todolist (
        id int(11) primary key auto_increment,
        todo varchar(255),
        completed boolean
      );
    `;

    dbConnection.query(query, (err) => {
      if (err) {
        console.log('Error creating todolist table: ', err);
      } else {
        console.log('Successfully created todolist table.');
      }
    });
  }
});

module.exports = dbConnection;