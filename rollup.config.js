import vue from 'rollup-plugin-vue';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy-assets';
import includePaths from 'rollup-plugin-includepaths';
import alias from '@rollup/plugin-alias';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path';
import { fileURLToPath } from 'url';

const extensions = ['.js', '.vue'];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default [
    {
        input: 'src/index.js',
        // external: Object.keys(Object.assign(pkg.peerDependencies, pkg.dependencies)),
        output: [
            {
                format: 'esm',
                name: 'color-gradient-picker',
                file: 'dist/index.mjs',
            },
            {
                format: 'cjs',
                name: 'color-gradient-picker', // umd and iife for var name = (function(){})()
                file: 'dist/index.js',
                // entryFileNames: 'index-[format].js',
                // dir: 'dist',
                // sourcemap: true,
            },
            // {
            //     format: 'es',
            //     dir: 'dist',
            //     entryFileNames: 'index-[format].js',
            //     sourcemap: true,
            //     name: 'color-gradient-picker',
            // }
        ],
        plugins: [
            vue(),
            peerDepsExternal(),
            scss({
                output: 'dist/index.css',
            }),
            nodeResolve({
                mainFields: ['module', 'main', 'browser'],
                extensions,
            }),
            commonjs(),
            // babel({
            //     exclude: './node_modules/**',
            //     extensions,
            //     objectAssign: 'Object.assign',
            // }),
            json(),
            copy({
                assets: [
                    // You can include directories
                    'src/assets',
                ],
            }),
            includePaths({
                paths: ['src'],
                extensions,

            }),
            alias({
                entries: {
                    ['@']: __dirname  + '/src'
                }
            }),
        ],
    }
];
