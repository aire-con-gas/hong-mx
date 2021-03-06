const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, 'src');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    loaders: [{
      test: /\.less$/,
      loaders: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 2, // https://github.com/postcss/postcss-loader#css-modules
          },
        },
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'less-loader',
          options: {
            modifyVars: {
              px: '1rem / 16',
            },
          },
        },
      ],
    }, {
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src'),
    }],
  },
  resolve: {
    alias: {
      components: path.join(srcPath, 'view/components'),
    },
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
