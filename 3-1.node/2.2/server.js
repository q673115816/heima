const net = require('net')

const server = net.createServer()

server.on('connection', clientSocket => {
    clientSocket.on('data', (data) => {
        console.log('客户端对服务端说：',data.toString())
    })
    console.log('有新的连接进来了')
    clientSocket.write('hello')
})

server.listen(3000, () => {
    console.log(`server running 127.0.0.1:3000`)
})