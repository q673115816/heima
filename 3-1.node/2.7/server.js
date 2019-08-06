const net = require('net')

const server = net.createServer()

const clients = []

server.on('connection', clientSocket => {
    clients.push(clientSocket)
    clientSocket.on('data', data => {
        console.log('有人说', data.toString().trim())
        clients.forEach(client => {
            if(client !== clientSocket) {
                client.write('有人说：'+ data)
            }
        })
    })
    
})

server.listen(3000, () => {
    console.log('server work...')
})