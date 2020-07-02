const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "../src/index.tsx"),
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "main.js"
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {test: /\.tsx?$/, use: ["babel-loader", "ts-loader"], exclude: /node_modules/}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../public/index.html")
        })
    ]
}
