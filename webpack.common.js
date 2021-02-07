'use strict'
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const setPath = function (folderName) {
    return path.join(__dirname, folderName);
};
const isProd = function () {
    return (process.env.NODE_ENV === 'production') ? true : false;
};
module.exports = {
    mode: isProd ? 'production' : 'development',
    devtool: 'source-map',
    optimization: {
        runtimeChunk: false,
        minimize: true,
        minimizer: [new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        })],
        splitChunks: {
            chunks: "all", //Taken from https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                }
            }
        }
    },
    resolveLoader: {
        modules: [setPath('node_modules')]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: false
    },
    entry: {
        index: './src/index.tsx',
        //styles: './src/styles.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: !isProd(),
                        }
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: { url: false, sourceMap: true }
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'cui-light-docs.[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: 'cui-light-doc.pack.[name].[chunkhash].js',
        publicPath: "/"
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'cui-light-docs.styles.css',
            chunkFilename: 'cui-light-styles.[id].css',
        })
    ]
};