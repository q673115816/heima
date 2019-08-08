const net = require('net')
const types = require('./types')
const client = net.createConnection({
    port: 3000,
    host: '127.0.0.1'
})

let nickname = null

client.on('connect', () => {
    if(!nickname) {
        process.stdout.write('请输入昵称')
        process.stdin.on('data', data => {
            let info = {
                type: types.login,
                value: data
            }
            client.write(JSON.stringify(info))
        })
    } else {
        process.stdin.on('data', data =>{
            client.write(data.toString().trim())
        })
    }
})

client.on('data', data => {
    console.log(data.toString().trim())
})