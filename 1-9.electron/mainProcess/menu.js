const {
    Menu,
    BrowserWindow,
    dialog
} = require('electron')

const path = require('path')

let template = [{
    label: '黑马计算器',
    submenu: [{
        label: '关于',
        click: function () {
            hm_aboutWindow()
        }
    }, {
        label: '退出',
        // role: 'quit'
        click: function(item, win, event) {
            dialog.showMessageBox({
                type: 'info',
                title: '退出提示',
                message: '请问是否真的要退出',
                buttons: ['确定','取消']
            },(index) => {
                if(index == 0) {
                    win.destroy()
                }
            })
        }
    }]
}, {
    label: '格式',
    submenu: [{
        label: '颜色',
        accelerator: (function () {
            if (process.platform == 'darwin') {
                return 'cmd +shift + c'
            } else {
                return 'ctrl + shift + c'
            }
        })(),
        click: function () {
            hm_setColor()
        }
    }, {
        label: '字体增大',
        accelerator: 'f10',
        click: function () {

        }
    }, {
        label: '字体减小',
        accelerator: 'f11',

        click: function () {

        }
    }, {
        label: '默认字体',
        accelerator: 'f12',

        click: function () {

        }
    }, ]
}]

function hm_aboutWindow() {
    let win = new BrowserWindow({
        width: 250,
         height: 250,
         title: '关于页面'
    })
    win.loadURL(path.join(__dirname, '../views/about.html'))

    win.setMenu(null)
}

function hm_setColor() {
    let win = new BrowserWindow({
        width: 250,
        height: 100,
        title: '选择颜色'
    })
    win.loadURL(path.join(__dirname, '../views/color.html'))
}

let menu = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(menu)