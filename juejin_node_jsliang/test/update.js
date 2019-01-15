const mysql = require('mysql')
const { DB } = require('./config')

var connection = mysql.createConnection(DB)

connection.connect()

let updateSql = "UPDATE user SET name = ?,age = ? where Id = ?"

let updateSqlParams = ['liangjinrong', '23',1]

connection.query(updateSql, updateSqlParams, function(err, res) {
    if(err) {
        console.log("更新错误：");
        console.log(err);
        return;
    } else {
        console.log("更新成功：");
        console.log(res);
    }
})

connection.end()