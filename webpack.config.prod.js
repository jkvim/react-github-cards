"use strict";
const libraryName = 'react-github-cards';
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    library: libraryName,
    filename: libraryName + '.min.js',
    libraryTarget: 'umd',
  },
  plugin: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss?/,
        loader: 'style!css!sass'
      }
    ]
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      },
    }
  ]
};