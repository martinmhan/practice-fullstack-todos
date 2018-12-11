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
      CREATE TABLE IF NOT EXISTS todolist_rawsql (
        id int(11) primary key auto_increment,
        todo varchar(255),
        completed boolean
      );
    `;

    dbConnection.query(query, (err) => {
      if (err) {
        console.log('Error creating todolist_rawsql table: ', err);
      } else {
        console.log('Successfully created todolist_rawsql table.');
      }
    });
  }
});

module.exports = dbConnection;