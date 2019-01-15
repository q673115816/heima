const mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
})

connection.connect()

let addSql = "INSERT INTO user(id,name,age) VALUES(0,?,?)"
let addSQLParams = ['jsliang', 23]

connection.query(addSql, addSQLParams, function (err, res) {
    if(err) {
        console.log('新增错误：');
        console.log(err);
        return;
    }else {
        console.log("新增成功：");
        console.log(res);
    }
})

connection.end()