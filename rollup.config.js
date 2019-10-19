import babel from 'rollup-plugin-babel';
import pkg from './package.json';


export default [
    {
        input: 'src/index.js',
        output: {
            sourcemap: true,
            name: 'AsyncMirror',
            file: pkg.browser,
            format: 'umd'
        },
        plugins: [
            babel({
                babelrc: false,
                presets: [
                    [
                        "@babel/env",
                        {
                            targets: "> 1%, not dead",
                            useBuiltIns: false,
                            modules: false
                        },
                    ],
                ],
                exclude: 'node_modules/**'
            })
        ]
    },

    {
        input: 'src/index.js',
        output: [
            {file: pkg.main, format: 'cjs', sourcemap: true},
            {file: pkg.module, format: 'esm', sourcemap: true}
        ]
    }
];
