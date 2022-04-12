// webpack.config.js 
const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const now = (new Date()).toLocaleString()

module.exports = {  
    entry: { 
        main: path.resolve(__dirname, './src/index.js'),
    }, 
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js', 
    },
    plugins: [
        /*new HtmlWebpackPlugin({
            revDate: now,
            template: './src/pages/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            revDate: now,
            template: './src/pages/about.html',
            filename: 'about.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/css', to: './css' },
                { from: './src/img', to: './img' }
            ]
        }),*/
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()
    ]
}
