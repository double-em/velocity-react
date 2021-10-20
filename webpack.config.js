var path = require('path');

module.exports = {
    mode: 'development',

    context: __dirname,
    entry: './demo/app.js',
    devtool: 'eval',

    resolve: {
        extensions: ['', '.js', '.jsx'],
    },

    output: {
        filename: 'bundle.js',
        path: __dirname + '/demo/build',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader' ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ]
                    }
                }
            },
        ],
    },
    plugins: [],

    devServer: {
        // All options here: https://webpack.js.org/configuration/dev-server/

        // enable HMR on the server
        hot: true,
        open: true,
        // match the output path

        static: {
            directory: path.join(__dirname, 'demo'),
        },

        // Enable to integrate with Docker
        //host:"0.0.0.0",

        port: 8080,
        historyApiFallback: true,

        // All the stats options here: https://webpack.js.org/configuration/stats/

    },
}

// module.exports = {
//     context: __dirname,
//     entry: './app.js',
//     devtool: 'eval',
//     resolve: {
//       extensions: ['', '.js', '.jsx'],
//     },
//     output: {
//       path: path.resolve(__dirname, '/build'),
//       filename: 'bundle.js',
//     },
//     module: {
//       loaders: [
//         { test: /\.css$/, loader: 'style-loader!css-loader' },
//         {
//           test: /\.jsx?$/,
//           exclude: /(node_modules|bower_components)/,
//           loaders: ['babel'],
//         },
//       ],
//     },
//     plugins: [],
//   };
// var path = require('path');

// module.exports = {
//   //...
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     compress: true,
//     port: 9000,
//   },
// };