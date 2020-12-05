module.exports = {
    entry: './mainModulo02.js',
    output: {
        path: __dirname,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}