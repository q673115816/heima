const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: ['webpack/hot/dev-server', './src/entry.js'],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    context: __dirname,
    target: 'web',
    devServer: {
        proxy: {},
        contentBase: path.join(__dirname, 'public'),
        port: 3001,
        hot: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader?cacheDirectory=true"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin(
            Object.assign({}, {
                inject: true,
                template: __dirname + '/public/index.html',
            })
        ),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}