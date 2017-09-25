'use strict';

require('dotenv').config();
const {DefinePlugin} = require('webpack');
const ExtractPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

let plugins = [
  new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
  new ExtractPlugin('blundle-[hash].css'),
  new DefinePlugin({
    __API_KEY__: JSON.stringify(process.env.API_KEY),
  }),
];

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
  },
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'bundle-[hash].js',
    path: `${__dirname}/build`,
    publicPath: '/',
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader','sass-loader']),
      },
    ],
  },
};
