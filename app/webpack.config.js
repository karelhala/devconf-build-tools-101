const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
    },
    entry: {
        main: resolve(__dirname, './src/index.js'),
        login: resolve(__dirname, './src/login.js')
    },
    output: {
        filename: 'js/[name].js',
        path: resolve(__dirname, './dist'),
        chunkFilename: 'js/[name].js'
    },
    plugins: [
        new CopyWebpackPlugin([
          { from: resolve(__dirname, './public'), to: 'public' }
        ]),
        new HtmlWebpackPlugin({
            chunks: [ 'main' ],
            title: 'Devconf 2020',
            favicon: './public/favicon.ico',
            template: resolve(__dirname, './src/index.html')
        }),
        new HtmlWebpackPlugin({
            inject: false,
            title: 'Devconf 2020 - 404',
            favicon: './public/favicon.ico',
            template: resolve(__dirname, './src/404.html'),
            filename: '404.html'
        }),
        new HtmlWebpackPlugin({
            chunks: [ 'login' ],
            title: 'Devconf 2020 - log me in',
            favicon: './public/favicon.ico',
            template: resolve(__dirname, './src/index.html'),
            filename: 'login.html'
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [{
            test: /src\/.*\.js$/,
            exclude: /(node_modules|bower_components)/i,
            use: [{ loader: 'source-map-loader' }, { loader: 'babel-loader' }, { loader: 'eslint-loader' }]
        }, {
            test: /\.s?[ac]ss$/,
            use: [
                process.env.NODE_ENV === 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                }
            ]
        }, {
            test: /\.(woff(2)?|ttf|jpg|png|eot|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        },
        {
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto'
        }]
    },
    devServer: {
        contentBase: resolve(__dirname, './dist'),
        hot: true,
        port: 8002,
        https: false,
        inline: true,
        disableHostCheck: true,
        historyApiFallback: true
    },
}
