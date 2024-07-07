const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@Mmpick010194',
    database: 'libertadoresdb'
});

module.exports = { pool };