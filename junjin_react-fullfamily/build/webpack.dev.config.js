const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const resolve = require('./unils/resolve')
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: [
            '@babel/polyfill',
            resolve('../src/index.js')
        ],
        vendor: [
            'react',
            'react-router-dom',
            'redux',
            'react-dom',
            'react-redux'
        ]
    },
    output: {
        path: resolve('../dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            pages: resolve('../src/pages'),
            components: resolve('../src/components'),
            router: resolve('../src/router'),
            actions: resolve('../src/redux/actions'),
            reducers: resolve('../src/redux/reducers'),
            images: resolve('../src/images'),
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: resolve('../src')
        }, {
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[local]--[hash:base64:5]'
                    }
                },
                'postcss-loader'
            ]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    devServer: {
        // contentBase: resolve('../dist'),
        compress: true, // gzip压缩
        host: '0.0.0.0', // 允许ip访问
        hot: true, // 热更新
        historyApiFallback: true, // 解决启动后刷新404
        port: 8000 // 端口
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('../pubilc/index.html')
        }),
        new MiniCssExtractPlugin({
        })
    ]
}