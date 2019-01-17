const http = require('http')
const fs = require('fs')
const path = require('path')
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
    });
    fs.readFile(path.join(__dirname, './index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return false
        }
        console.log(data);
        
        res.write(data);
        res.end()
    })
    // fs.readFileSync('./index.html', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         return false
    //     }
    //     res.write(data);

    //     res.end()
    // })
}).listen(3000, function () {
    console.log('http://localhost:3000');

}); // 监听的端口