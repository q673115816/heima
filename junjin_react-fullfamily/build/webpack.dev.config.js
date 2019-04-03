const path = require('path')
const resolve = require('./unils/resolve')
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: resolve('../src/index.js'),
    output: {
        path: resolve('../dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            router: path.join(__dirname, '../src/router')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: resolve('../src')
        }]
    },
    devServer: {
        contentBase: resolve('../dist'),
        compress: true, // gzip压缩
        host: '0.0.0.0', // 允许ip访问
        hot: true, // 热更新
        historyApiFallback: true, // 解决启动后刷新404
        port: 8000 // 端口
    }
}