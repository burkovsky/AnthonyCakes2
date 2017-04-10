'use strict';

const path = require('path');
const webpack = require('webpack');

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve('src/'),
    entry: './main',
    output: {
        path: path.resolve('public/dist/'),
        publicPath: '/dist/',
        filename: 'main.[hash].js',
        chunkFilename: '[id].main.[hash].js'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.js', '.scss', '.css']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                    'angular2-template-loader',
                    'angular-router-loader'
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        minimize: false
                    }
                }
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'Tether': 'tether'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('index.template.html'),
            filename: path.resolve('public/index.html')
        })
    ]
};