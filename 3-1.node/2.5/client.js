const net = require('net')

const client = net.createConnection({
    port: 3000,
    host: '127.0.0.1'
})

client.on('connect', () => {
    process.stdin.on('data', data => {
        client.write(data.toString().trim())
    })
})

client.on('data', data => {
    console.log('服务器说：' + data.toString())
})