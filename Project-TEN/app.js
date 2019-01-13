const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

let count = 0;

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true // 启动模板文件监视，文件改变，重新预编译，建议开发阶段开启
});

app.get('/', function (req, res) {
    count++
    res.render('index.html', {
        message: 'nunjucks',
        count
    });
});

app.listen(3000, () => {
    console.log('服务启动成功');
    console.log('http://localhost:3000');
})