
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const cssLoader = require('./cssLoader')

// ./webpack.config.js
/** @type {import('webpack').Configuration} */
const config = {
    mode: 'development',
    module: {
        rules: [
            cssLoader('dev')
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './../dist'),
        hot: true,
        open: true,
        proxy: {
            '/api': {
                target: "http://localhost:3000",
                pathRewrite: {"^/api" : ""}
            }
        }
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
module.exports = merge(commonConfig, config)