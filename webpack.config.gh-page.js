"use strict";

const webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
    {
      test: /.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /.scss$/,
      loader: 'style!css!sass'
    }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
  ]
};
