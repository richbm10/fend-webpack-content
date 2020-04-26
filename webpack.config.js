const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [{
                enforce: 'pre',
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};