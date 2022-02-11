
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  port: 8889,
  database: 'extra',
  user: 'root',
  password: 'root'
});

module.exports = pool;