// electron 项目入口文件

const { app, BrowserWindow }  = require('electron')
var path = require('path')


app.on('ready', function() {
    // console.log('hello')
    hm_createWindow()
})

function hm_createWindow() {
    let win = new BrowserWindow({

        width: 300,

        height: 490,

        title: '黑马计算器'
    })

    win.loadURL(path.join(__dirname, 'views/index.html'))

    win.webContents.openDevTools()

    win.on('close', function(event) {
        win = null
        app.quit()
    })

    win.on('ready-to-show', function() {
        win.show()
        win.focus()
    })
    require('./mainProcess/menu')
}