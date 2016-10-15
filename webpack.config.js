const path = require('path');

module.exports = {
  context: __dirname + "/app",

  entry: {
    javascript: "./js/app.js",
    css: "./styles.css",
    html: "./index.html",
  },

  output: {
    filename: "app.js",
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: path.resolve(__dirname, './app/js'),
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        loader: "file?name=[name].[ext]",
      }
    ]
  }
};
