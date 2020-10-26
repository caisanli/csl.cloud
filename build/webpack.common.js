const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(_path) {
    return path.resolve(__dirname, _path);
}

// ./webpack.config.js
/** @type {import('webpack').Configuration} */
const config = {
    entry: {
        index: './src/index.tsx'
    },
    output: {
        filename: "js/[name].[hash].js",
        path: resolve('./../dist'),
        publicPath: ''
    },
    optimization: { // 代码分隔
        splitChunks: {
            chunks: 'async',//默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
            minSize: 30000,//合并前模块文件的体积
            minChunks: 1,//最少被引用次数
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~'//自动命名连接符
        }
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(ts|tsx)$/,
                        use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    cacheDirectory: true
                                }
                            }
                        ],
                        exclude: /node_modules/
                    },
                    {
                        test: /\.(png|jpg|jpeg|gif)$/,
                        use: 'url-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.(png|jpg|gif|jpeg|webp|svg)$/,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: 10240, //10K
                                    esModule: false,
                                    name: 'image/[name]_[hash:6].[ext]'
                                }
                            }
                        ],
                        exclude: /node_modules/
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '@': resolve('./../src/'),
            '@comp': resolve('./../src/component/'),
            '@asset': resolve('./../src/assets'),
            '@utils': resolve('./../src/utils')
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('../public/index.html')
        })
    ]
};

module.exports = config;
