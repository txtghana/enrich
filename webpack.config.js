const path = require('path');

module.exports = (env, argv) => {
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'enrich.js',
            library: 'txtghana',
            libraryTarget: 'umd',
            globalObject: 'this',
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            }],
        },
        resolve: {
            alias: {
                config: path.join(__dirname, 'config', argv.mode || 'production')
            }
        }
    }
};