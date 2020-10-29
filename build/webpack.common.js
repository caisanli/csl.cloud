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
        filename: "js/[name].[fullhash].js",
        path: resolve('./../dist'),
        publicPath: ''
    },
    target: ['web', 'es5'],
    optimization: { // 代码分隔
        splitChunks: {
            chunks: 'async',//默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
            minSize: 30000,//合并前模块文件的体积
            minChunks: 1,//最少被引用次数
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~', //自动命名连接符
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    minChunks: 1,//敲黑板
                    priority: -10//优先级更高
                },
                default: {
                    test: /[\\/]src[\\/]js[\\/]/,
                    minChunks: 2,//一般为非第三方公共模块
                    priority: -20,
                    reuseExistingChunk: true
                }
            },
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
            '@utils': resolve('./../src/utils'),
            '@views': resolve('./../src/views')
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
