const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|svg|gif)/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html/,
                use: ['html-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'German Robayo',
            template: './src/index.html',
            minify: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new FaviconsWebpackPlugin('./src/icon.png')
    ]
};
