
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
                loader: '@teamsupercell/typings-for-css-modules-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: { 
                        auto: true,
                        exportLocalsConvention: 'camelCase', // 将样式文件的 box-header 导入后 改为 boxHeader 
                    }
                }
            },
            {
                loader: require.resolve('less-loader'),
                options: {
                    sourceMap: true,
                    lessOptions: {
                        javascriptEnabled: true,
                    }
                }
            },
            {
                loader: 'style-resources-loader',
                options: {
                    patterns: [
                        './../src/assets/css/variables.less',
                    ]
                }
            }
        ]
    }
}

// eslint-disable-next-line no-undef
module.exports = cssLoader;