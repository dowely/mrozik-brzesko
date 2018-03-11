var path = require('path');

module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },
  mode: 'development'
}
