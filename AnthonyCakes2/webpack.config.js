'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    entry: './app/index.ts',
    output: {
        path: './wwwroot/build',
        filename: 'bundle.js'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.js', '.css', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: 'css-loader?minimize!sass-loader?sourceMap'
                })
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['./app/**/*.js', './app/**/*.map', './wwwroot/**/*.*']),
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new ExtractTextPlugin({
            filename: 'styles.css',
            disable: false,
            allChunks: true
        })
    ]
};