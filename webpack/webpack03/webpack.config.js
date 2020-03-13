const path = require("path");
module.exports = {
    context: path.join(__dirname, "./src"),
    entry: './index.js',
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "test.js",
    },
    mode: "development",
    devServer: {
        publicPath: '/dist',
        port: 2020
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [[
                            'env', { module: false }
                        ]]
                    }
                }
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: "file-loader"
            }
        ]
    }
}