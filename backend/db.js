const mysql = require("mysql")
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'shinuk',
    database: 'myapp'
});

exports.pool = pool;