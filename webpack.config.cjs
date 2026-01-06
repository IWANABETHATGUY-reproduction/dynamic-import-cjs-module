const path = require('path');
const webpack = require('webpack')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'webpack-dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        type: 'javascript/esm',
      },
    ],
  },
  optimization: {
    minimize: false,
    moduleIds: 'named',
    chunkIds: 'named',
  }
};
