const path = require("path");
module.exports = {
    devtools: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        port: 8080
    }
}