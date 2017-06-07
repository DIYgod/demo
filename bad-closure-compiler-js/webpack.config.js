const ClosureCompiler = require('google-closure-compiler-js').webpack;
const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, 'main.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.jswebpack.min.js'
    },
    plugins: [
        new ClosureCompiler({
            jsOutputFile: 'main.min.js',
            compilationLevel: 'ADVANCED',
            externs: [
                { path: 'externs.js' }
            ],
        })
    ]
};