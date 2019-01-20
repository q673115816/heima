const path = require('path')
const express = require('express')
const nunjucks = require('nunjucks')
const app = express()


app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/lib', express.static(path.join(__dirname, 'lib')))
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true // 启动模板文件监视，文件改变，重新预编译，建议开发阶段开启
});

app.get('/', function (req, res) {
    res.render('index.html', {
        message: 'nunjucks'
    });
});

app.use('/people/home', (req,res) => {
    res.render('people-home.html')
})

app.use('/test', (req,res) => {
    res.render('test.html', {
        msg: 'people-home'
    })
})

app.listen(3000, () => {
    console.log('服务启动成功');
    console.log('http://localhost:3000');
})