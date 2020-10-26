
const path = require('path')
const { ClearWebpackPlugin } = require('clean-webpack-plugin')
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
            filename: 'css/[name].[hash:8].css'
        }),
        new CopyWebpackPlugin({
            patterns: {
                form: path.resolve(__dirname, '../public'),
                to: path.resolve(__dirname, '../dist'),
                globOptions: {
                    dot: true,
                    gitignore: true,
                    ignore: ['**/index.html'],
                },
            }
        }),
        new ClearWebpackPlugin()
    ]
}
module.exports = merge(commonConfig, config)