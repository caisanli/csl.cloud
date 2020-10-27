
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const commonConfig = require('./webpack.common')
const cssLoader = require('./cssLoader')

// ./webpack.config.js
/** @type {import('webpack').Configuration} */
const config = {
    mode: 'production',
    module: {
        rules: [
            cssLoader('prod')
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[fullhash:8].css'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'public'
            }]
        }),
        new CleanWebpackPlugin()
    ]
}
module.exports = merge(commonConfig, config)