const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'img/[hash][ext]',
    clean: true,
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'main.[contenthash].css'
  })],
});
