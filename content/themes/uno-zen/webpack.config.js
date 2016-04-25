/**
 * Created by madlord on 16/1/14.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin =require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "uno-zen":['./assets/js/src/index.es6'],
        "commons": ['fastclick','./assets/js/vendor/jquery.fitvids.js','./assets/js/vendor/jquery.ghostHunter.min.js','./assets/js/vendor/pace.min.js','./assets/js/vendor/prism.js','./assets/js/vendor/readingTime.min.js'],//将经常用的库js包打到commons.js中,此js中的内容不会经常变动
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './assets/build/'),
        chunkFilename:'[name].[chunkhash].js',
        sourceMapFilename:'[name].map',
    },
    cache:true,
    // devtool: 'source-map',
    resolve:{
    },
    module: {
        loaders: [{
            test: /\.(es6|jsx)$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: [ 'es2015'],
                plugins: ["transform-object-rest-spread"]
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css?-restructuring!postcss')
        }, {
            test: /\.css\.module/,
            loader: ExtractTextPlugin.extract('css?-restructuring&modules&localIdentName=[local]___[hash:base64:5]!postcss')
        },{
            test: /\.svg$/,
            loader: "url-loader?limit=10000&mimetype=image/svg+xml"
        }, {
            test: /\.woff|ttf|woff2|eot$/,
            loader: 'url?limit=100000'
        },{
            test:  /\.less$/,
            loader: ExtractTextPlugin.extract('css!postcss!less')
        }, {
            test:  /\.less\.module/,
            loader: ExtractTextPlugin.extract('css?modules&localIdentName=[local]___[hash:base64:5]!postcss!less')
        }, {
            test:  /\.scss$/,
            loader: ExtractTextPlugin.extract('css!postcss!sass')
        }, {
            test:  /\.scss\.module/,
            loader: ExtractTextPlugin.extract('css?modules&localIdentName=[local]___[hash:base64:5]!postcss!sass')
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "[name].js",
            minChunks: Infinity//当项目中引用次数超过2次的包自动打入commons.js中,可自行根据需要进行调整优化

        }),
        new ExtractTextPlugin("[name].css", {
            disable: false,
            allChunks: true
        }),
    ]
};
