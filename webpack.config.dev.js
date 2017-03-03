'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

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
                        use: 'css-loader?sourceMap!sass-loader?sourceMap'
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
        devtool: 'source-map',
        plugins: [
            new ExtractTextPlugin('styles.css'),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'Tether': 'tether'
            })
        ]
    }
};