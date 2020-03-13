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
}