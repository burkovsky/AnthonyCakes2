'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

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
                            loader: 'css-loader?minimize!sass-loader'
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
            new DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(env)
                }
            }),
            new CleanWebpackPlugin(['./wwwroot/build/', './app/**/*.js', './app/**/*.map'],
            {
                verbose: false,
                dry: false
            }),
            new UglifyJsPlugin({
                minimize: true,
                sourceMap: false,
                output: {
                    comments: false
                },
                compressor: {
                    warnings: false
                }
            }),
            new ExtractTextPlugin({
                filename: 'styles.css',
                disable: false,
                allChunks: true
            })
        ]
    }
};