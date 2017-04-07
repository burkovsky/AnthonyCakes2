'use strict';

const baseConfig = require('./webpack.config.base.js');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(baseConfig, {
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                exclude: path.resolve('src/app/'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap!sass-loader?sourceMap'
                })
            },
            {
                test: /\.(css|scss)$/,
                include: path.resolve('src/app/'),
                use: [
                    {
                        loader: 'to-string-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.PRODUCTION': JSON.stringify(false)
        })
    ]
});