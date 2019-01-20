const http = require('http')
const fs = require('fs')
const path = require('path')
http.createServer((req, res) => {
    const type = req.url.slice(req.url.lastIndexOf('.') + 1)
    console.log(req.url);

    if (req.url == '/') {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=UTF-8"
        });
        res.end(fs.readFileSync(path.join(__dirname, './index.html')))
    } else {
        res.writeHead(200, {
            "Content-Type": `text/${type};charset=UTF-8`
        });
        res.end(fs.readFileSync(path.join(__dirname, req.url)))
    }
    // fs.readFileSync(path.join(__dirname, './index.html'), 'utf-8', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         return false
    //     }
    // })
    // res.end(fs.readFileSync(path.join(__dirname, req.url)))

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