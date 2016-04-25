/**
 * Created by madlord on 16/1/14.
 */

"use strict";
var path = require('path');
var webpack = require('webpack');
let config=require('./webpack.config.js');
config.plugins=[
    ...config.plugins,
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
];
module.exports = config;
