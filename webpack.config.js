const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './client/src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ["@babel/env"] }
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, 'client/dist/'),
    filename: 'bundle.js'
  }
}