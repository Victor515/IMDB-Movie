'use strict';

const path = require('path');
const copy = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'source');

const config = {

    entry: {
        app: [APP_DIR + '/index.jsx']
    },

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    context: path.join(__dirname, 'source'),

	module: {
        loaders : [
            {
                test: /\.jsx?/,
                exclude : [/node_modules/, /bower_components/],
                include : APP_DIR,
                loader : 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader?-url', 'postcss-loader', 'sass-loader']
                  })
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?-url', 'postcss-loader']
                })
            }

        ]
    },

    plugins: [
        // copy the assets
        new copy([
            {from: APP_DIR + '/assets/', to: BUILD_DIR + '/assets/'}
        ], {
            copyUnmodified: false,
            debug: 'debug'
        }),
        new HtmlWebpackPlugin({
            template: APP_DIR + '/html/index.html'
        }),
        new ExtractTextPlugin('styles.css')
    ]
};

module.exports = config;
