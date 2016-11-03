var path = require('path');

var config = {
    entry: [
        __dirname + '/src/main.js',
        __dirname + '/src/styles/main.less'
    ],
    
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    },

    output: {
        path: __dirname + '/',
        filename: 'build.js',
    },

    devServer: {
        inline: true,
        port: 8888
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
                esversion : 7,
            },

            {
                test: /\.less$/,
                loader: "style!css!less"
            },
        ]
    }
}
module.exports = config;