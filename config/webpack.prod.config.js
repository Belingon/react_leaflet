/**
 * Created by Courtland.Parker on 6/10/2017.
 */
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const root = path.resolve(__dirname, '..');
const appSrc = path.join(root, 'src');

module.exports = {
        context: appSrc,
        entry: './index.js',

        plugins: [
            new CaseSensitivePathsPlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            })
        ],

        devtool: 'source-map',

        externals: {
            react: 'react',
            'react-addons-create-fragment': 'react-addons-create-fragment',
            'react-addons-transition-group': 'react-addons-transition-group',
            'react-addons-shallow-compare': 'react-addons-shallow-compare',
            'react-dom': 'react-dom',
            'react-tap-event-plugin': 'react-tap-event-plugin'
        },

        output: {
            path: path.join(root, 'dist'),
            filename: 'index.js',
            sourceMapFilename: 'index.map',
            libraryTarget: 'commonjs'
        },

        postcss: () => ({
        defaults: [autoprefixer],
        cleaner: [autoprefixer({ browsers: ['last 2 versions'] })]
    }),

    sassLoader: {
    includePaths: [
        appSrc,
        path.join(root, 'node_modules')
    ]
},

module: {
    loaders: [
        {
            test: /\.js$/,
            include: appSrc,
            exclude: /\.spec.js$/,
            loaders: ['babel-loader']
        },
        {
            test: /\.css?$|\.scss$/,
            include: appSrc,
            loaders: [
                'style',
                'css?sourceMap',
                'postcss',
                'sass?outputStyle=expanded&sourceMap'
            ]
        },
        {
            test: /\.png$/,
            loader: "url-loader?limit=100000"
        }
    ]
}
};