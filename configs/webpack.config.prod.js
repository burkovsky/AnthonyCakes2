'use strict';

const baseConfig = require('./webpack.config.base.js');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(baseConfig, {
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                exclude: path.resolve('src/app/'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.(css|scss)$/,
                include: path.resolve('src/app/'),
                use: [
                    'to-string-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    devtool: false,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.PRODUCTION': JSON.stringify(true)
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: false
        }),
        new CompressionPlugin({
            test: /\.js$|\.css$|\.html$/,
            minRatio: 0.8
        })
    ]
});