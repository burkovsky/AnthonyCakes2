'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = function(env) {
    return {
        entry: './app/index.ts',
        output: {
            path: './public/build',
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
                    test: /\.(css|scss)$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader?minimize!sass-loader'
                    })
                },
                {
                    test: /\.html$/,
                    loader: "raw-loader"
                },
                {
                    test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                    loader: 'file-loader'
                }
            ]
        },
        devtool: false,
        plugins: [
            new CleanWebpackPlugin(['./public/build/'],
            {
                verbose: false
            }),
            new ExtractTextPlugin('styles.css'),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'Tether': 'tether'
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(env)
                }
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
    }
};