const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hellO12#',
  database: 'movieList'
})

module.exports.connection = connection;