const path = require("path");
module.exports = {
    context: path.join(__dirname, "./src"),
    entry: './index.js',
    output: {
        filename: "./index.js",
    },
    mode: "development",
    devServer: {
        publicPath: '/dist'
    },
}