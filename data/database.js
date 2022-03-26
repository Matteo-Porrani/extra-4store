
const mysql = require('mysql2/promise');

// local
// const pool = mysql.createPool({
//   host: 'localhost',
//   port: 8889,
//   database: 'extra',
//   user: 'root',
//   password: 'root'
// });


const pool = mysql.createPool({
  host: 'eu-cdbr-west-02.cleardb.net',
  port: 3306,
  database: 'heroku_2bddddf5a79f460',
  user: 'bdf607448f62cc',
  password: '8131050d'
});

module.exports = pool;