// webpack.config.js 
const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {  
    entry: { 
        main: path.resolve(__dirname, './src/index.js'),
    }, 
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js', 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            filename: 'index.html'
        }),
        /*new HtmlWebpackPlugin({
            template: './src/pages/news.html',
            filename: 'news.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/photo.html',
            filename: 'photo.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/timetable.html',
            filename: 'timetable.html'
        }),*/
        new CopyPlugin({
            patterns: [
                { from: './src/pages/img', to: './img' }
            ]
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    }
}
