const common = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src',
        hot: true,
        watchContentBase: true
    },
    mode: 'development'

})