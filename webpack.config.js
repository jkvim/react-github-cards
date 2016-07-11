"use strict";
const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: ['webpack-hot-middleware/client', './index.js'],
  output: {
    filename: 'react-github-card.js'
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    inline: true,
    progress: true,
    port: 8080
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugin: [
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
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss?/,
        loader: 'style!css!sass'
      }
    ]
  }

}
