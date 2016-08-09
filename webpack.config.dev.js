"use strict";
const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: ['webpack-hot-middleware/client', './example/index.js'],
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './example',
    hot: true,
    inline: true,
    progress: true,
    port: 8080
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({url: 'http://localhost:8080'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.scss?/,
        loader: 'style!css!sass'
      }
    ]
  }

}
