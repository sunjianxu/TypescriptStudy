const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        app:path.join(__dirname, "../src/index.tsx")
    },
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "[name].[chunkhash:8].js"
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
    ],
    optimization: { // 可以将生产的依赖进行拆包打包
        splitChunks: {
            chunks: "all"
        }
    }
}
