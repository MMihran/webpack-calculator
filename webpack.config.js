const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: "style-loader!css-loader"
      },
      {
        test: /\.js$/,
        loaders: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
