const { resolve } = require('path');
const { name, dependencies } = require('./package.json');
const { readdirSync } = require('fs');

const components = './src/components';

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const fileMapper = (subDir) => getDirectories(subDir).reduce((acc, dir) => ({
    ...acc, [dir]: `${subDir}/${dir}/index.js`
}), {});

module.exports = Object.entries({
    umd: 'umd',
    esm: 'commonjs2', //no esm, sorry https://github.com/webpack/webpack/issues/2933#issuecomment-541028488
    // esm: 'module',
    cjs: 'commonjs'
}).map(([ key, type ]) => ({
    mode: 'production',
    entry: {
        index: resolve(__dirname, './src/index.js'),
        ...fileMapper(components)
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, `./dist/${key}`),
        library: name,
        libraryTarget: type,
        umdNamedDefine: true
    },
    plugins: [  ],
    externals: Object.keys(dependencies),
    module: {
        rules: [{
            test: /src\/.*\.js$/,
            exclude: /(node_modules|bower_components)/i,
            use: [{ loader: 'source-map-loader' }, { loader: 'babel-loader' }, { loader: 'eslint-loader' }]
        }, {
            test: /\.s?[ac]ss$/,
            use: [
                {
                    loader: 'style-loader'
                },
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
    }
}));
