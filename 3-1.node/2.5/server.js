const net = require('net')

const server = net.createServer()

const clients = []

server.on('connection', (clientSocket) => {
    clients.push(clientSocket)
    clientSocket.on('data', data => {
        console.log('有人说：', data.toString())
        clients.forEach(socket => {
            if(socket !== clientSocket) {
                socket.write(data.toString())
            }
        })
    })
})

server.listen(3000, () => {
    console.log('server work')
})