var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var prod = process.argv.indexOf('-p') !== -1;

var config = {
    entry: [
        __dirname + '/src/Main.js',
        __dirname + '/styles/main.less'
    ],
    
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    },

    output: {
        path: __dirname + '/build',
        filename: 'build.js',
    },

    devServer: {
        inline: true,
        port: 8888,
        historyApiFallback: true
    },

    stats: {
        colors: true
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
            },

            {
                test: /\.less$/,
                exclude: /fonts/,
                loader: prod ? ExtractTextPlugin.extract('style', 'css!less') : 'style!css!less'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("build.css")
    ]
}

if (prod) {
    config.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': `"production"`
        }
    }));
}

module.exports = config;
