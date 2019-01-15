const mysql = require('mysql')
const {
    DB
} = require('./config')
var connection = mysql.createConnection(DB)

connection.connect()

let readSql = "SELECT * FROM user"

connection.query(readSql, function (err, res) {
    if (err) throw err
    console.log(res);

})

connection.end()