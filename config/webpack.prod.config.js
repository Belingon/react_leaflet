/**
 * Created by Courtland.Parker on 6/10/2017.
 */
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const url = require('url');
const path = require('path');
const paths = require('./paths');
const getClientEnvironment = require('./env');

function ensureSlash(pathName, needsSlash) {
    const hasSlash = pathName.endsWith('/');
    if (hasSlash && !needsSlash) {
        return pathName.substr(pathName, pathName.length - 1);
    } else if (!hasSlash && needsSlash) {
        return `${pathName}/`;
    }
    return pathName;
}

const homepagePath = require(paths.appPackageJson).homepage;
const homepagePathname = homepagePath ? url.parse(homepagePath).pathname : '/';
const publicPath = ensureSlash(homepagePathname, true);
const publicUrl = ensureSlash(homepagePathname, false);
const env = getClientEnvironment(publicUrl);

module.exports = {
    bail: true,
    devtool: 'source-map',
    entry: {
        polyfills: require.resolve('./polyfills'),
        vendor: ['react', 'react-dom', 'react-router', 'react-tap-event-plugin'],
        index: paths.appIndexJs
    },
    output: {
        path: paths.appBuild,
        filename: 'static/js/[name].[chunkhash:8].js',
        publicPath
    },
    resolve: {
        fallback: paths.nodePaths,
        extensions: ['.js', '.json', '.jsx', ''],
        alias: {
            react: path.join(paths.appNodeModules, 'react'),
            'react-dom': path.join(paths.appNodeModules, 'react-dom'),
            'react-native': 'react-native-web'
        }
    },
    sassLoader: {
        includePaths: [
            paths.appSrc,
            paths.appNodeModules
        ]
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                loader: 'babel'
            },
            {
                test: /\.scss$|\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!sass!postcss')
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file',
                query: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    postcss: () => ({
        defaults: [autoprefixer],
        cleaner: [autoprefixer({browsers: ['last 2 versions']})]
    }),
    plugins: [
        new WebpackMd5Hash(),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: publicUrl
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new webpack.DefinePlugin(env),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true, // React doesn't support IE8
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        }),
        new ExtractTextPlugin('static/css/[name].[contenthash:8].css')
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};