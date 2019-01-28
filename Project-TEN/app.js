const path = require('path')
const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')

app.set('view engine', 'html')
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/lib', express.static(path.join(__dirname, 'lib')))

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true // 启动模板文件监视，文件改变，重新预编译，建议开发阶段开启
});

app.use(routes)

const server = app.listen(3000, () => {
    const host = server.address().address
    const part = server.address().port
    console.log('服务启动成功');
    console.log('%s:%s',host, part);
})