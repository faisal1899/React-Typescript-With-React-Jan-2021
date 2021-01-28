const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: {
  //   main: './src/index.tsx'
  // },
  // output: {
  //   filename: '[name]-[contenthash].bundle.js',
  //   chunkFilename: '[name]-[contenthash].bundle.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  entry: {
    main: './src/index.tsx',
    // counter: './src/counter/Counter.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[contenthash:8].bundle.js',
  },
  optimization: {
    runtimeChunk: 'single',
    // splitChunks: {
    //   chunks: 'all',
    //   maxSize: 0
    // }
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['src', 'node_modules'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@home': path.resolve(__dirname, 'src/home'),
      '@counter': path.resolve(__dirname, 'src/counter'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
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