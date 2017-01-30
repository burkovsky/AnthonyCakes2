'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
    return {
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
                    test: /\.(css|scss)$/,
                    use: [
                        'to-string-loader',
                        ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            loader: 'css-loader?sourceMap!sass-loader?sourceMap'
                        })
                    ]
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
        devtool: 'source-map',
        plugins: [
            new CleanWebpackPlugin(['./wwwroot/build/'],
            {
                verbose: false
            }),
            new ExtractTextPlugin('styles.css')
        ]
    }
};