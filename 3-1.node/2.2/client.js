const net = require('net')

const client = net.createConnection({
    host: '127.0.0.1',
    port: 3000
})

client.on('connect', () =>{
    console.log('连接成功')

    client.write('world')

    process.stdin.on('data', data => {
        // console.log(data.toString())
        client.write(data.toString().trim())
    })
})

client.on('data', data => {
    console.log('服务端对客户端说：',data.toString())
})