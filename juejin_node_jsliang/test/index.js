const mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
})

connection.connect()

connection.query('SELECT * FROM user', function(error, results, fields) {
    if(error) throw error
    console.log(results);
})

connection.end()