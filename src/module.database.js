const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection(
  { 
    host: '192.168.0.200',
    user: 'remote',
    password: 'password',
    database: 'datos_prueba_pisa'
  });

/* open the MySQL connection */
connection.connect( function (err) {
  if (err) { console.log(err) }
  else { console.log("Database connected"); }
});

module.exports = connection;