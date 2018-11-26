const express = require('express')
const fs = require('fs')
const app = express()
const template = require('express-art-template')
app.get('/', function (req, res) {
    // fs.readFile('./index.html','utf8',(err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     console.log(data)
    //     const html = template(data,{
    //         user: {
    //             name: 'aui',
    //             tags: ['art', 'template', 'nodejs']
    //         }
    //     })
    //     res.send(data)
    // });
    const html = template(__dirname + '/index.html',{
        user: {
            name: 'aui',
            tags: ['art', 'template', 'nodejs']
        }
    })
    res.send(html)

});
app.listen(3000,function(){
    console.log('server is open in http://localhost:3000')
})