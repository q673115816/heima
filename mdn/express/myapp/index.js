const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(3000, (a,b,c) => {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(`程序正在监听${3000}`)
})