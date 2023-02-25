const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.HOST || 'localhost',
  user: process.env.USER || 'root',
  password: process.env.PASSWORD || 'password',
  port: process.env.DB_PORT || '3306',
});

module.exports = connection;
