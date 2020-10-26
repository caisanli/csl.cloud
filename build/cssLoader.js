
// eslint-disable-next-line no-undef
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function cssLoader(env) {
    return {
        test: /\.(less|css)$/,
        use: [
            {
                loader: env === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader
            },
            {
                loader: 'typings-for-css-modules-loader',
                options: {
                    modules: true,
                    namedExport: true,
                    camelCase: true,
                }
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: { 
                        auto: true 
                    },
                    localsConvention: 'camelCase', // 将样式文件的 box-header 导入后 改为 boxHeader
                }
            },
            {
                loader: 'less-loader',
                options: {
                    sourceMap: true
                }
            }
        ]
    }
}

// eslint-disable-next-line no-undef
module.exports = cssLoader;