'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

require('es6-promise').polyfill();

module.exports = {
    entry: ['./src/js/main.jsx'],

    output: {
        path: __dirname,
        filename: './js/app.js'
    },
    devtool: 'eval-source-map',
    plugins: [
        new ExtractTextPlugin('./css/app.css')
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,  exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2' , 'react'] }
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader?url=false!sass-loader"
            },
            { test: /\.svg$/, loader: 'svg-loader?pngScale=2' },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }  
            },
        ],

    },

    stats: {
        // Colored output
        colors: true
    },

    // Create Sourcemaps for the bundle
    // devtool: 'source-map'
};
