const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const resolve = require('./unils/resolve')
module.exports = {
    mode: 'production',
    devtool: 'none',
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
        publicPath: '/dist',
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
    optimization: {
        splitChunks: {
            chunks: 'all'
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
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('../pubilc/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({
            path: resolve('../dist')
        }),
        new OptimizeCssAssetsPlugin()
    ]
}