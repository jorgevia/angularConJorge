const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './src/client/app/app.module.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/index.html",
    })
  ]
};