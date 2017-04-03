'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve('src/'),
    entry: './main',
    output: {
        path: path.resolve('public/dist/'),
        filename: 'main.js'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.js', '.scss', '.css']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap!sass-loader?sourceMap'
                })
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
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'Tether': 'tether'
        }),
        new webpack.DefinePlugin({
            'process.env.PRODUCTION': JSON.stringify(false)
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('index.template.html'),
            filename: path.resolve('public/index.html'),
            hash: true
        })
    ]
};