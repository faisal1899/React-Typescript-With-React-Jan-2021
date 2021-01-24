const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['src', 'node_modules'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@counter': path.resolve(__dirname, 'src/counter'),
    }
  },
  module: {
    rules: [
      {
        // test: /\.ts(x?)$/,
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        test: /.\html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
  ]
};