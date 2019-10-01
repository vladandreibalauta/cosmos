const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
        entry: './js/app.js',
        output: {
          path: __dirname + '/dist',
          filename: 'index.js'
        },
        plugins: [
          new HtmlWebpackPlugin({
            title: 'Bridge Partners',
            template: 'index.html',
          }),
          new CopyPlugin([
            { from: './css', to: 'css' },
            { from: './vendor', to: 'vendor'},
            { from: './img', to: 'img'},
            { from: './favicon.ico'}
          ])        
        ]
};