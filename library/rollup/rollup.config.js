/* eslint-disable camelcase */

import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import nodeGlobals from 'rollup-plugin-node-globals';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import analyze from 'rollup-plugin-analyzer';
import { dependencies, name } from './package.json';
import { readdirSync } from 'fs';

const components = './src/components';

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const fileMapper = (subDir) => getDirectories(subDir).reduce((acc, dir) => ({
    ...acc, [dir]: `${subDir}/${dir}/index.js`
}), {});

const external = Object.keys(dependencies);

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    '@patternfly/react-core': '@patternfly/react-core',
    '@patternfly/react-icons': '@patternfly/react-icons'
};

const commonjsOptions = {
    ignoreGlobal: true,
    include: /node_modules/
};

const babelOptions = {
    exclude: /node_modules/,
    runtimeHelpers: true,
    configFile: './.babelrc'
};

const plugins = [
    nodeResolve(),
    babel(babelOptions),
    commonjs(commonjsOptions),
    nodeGlobals(),
    terser({
        keep_classnames: true,
        keep_fnames: true
    }),
    postcss({
        inject: true
    }),
    analyze({ summaryOnly: true }),
    json()
];

export default [
    ...['cjs', 'esm', ].map(env => ({
        input: {
            index: './src/index.js',
            ...fileMapper(components)
        },
        output: {
            dir: `./dist/${env}`,
            format: env,
            name,
            globals
        },
        external,
        plugins
    })),
    {
        input: './src/index.js',
        output: {
            file: './dist/umd/index.js',
            format: 'umd',
            name,
            globals
        },
        external,
        plugins
    }
];
