const mysql = require('mysql')
const { DB } = require('./config');

var connection = mysql.createConnection(DB)

connection.connect()

var delSql = "DELETE FROM user where id = 2"

connection.query(delSql,function(err,res) {
    if(err) {
        console.log('删除错误：');
        console.log(err);
        return
    }else {
        console.log('删除成功：');
        console.log(res);
        
    }
})

connection.end()