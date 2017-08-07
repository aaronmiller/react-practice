const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: [
    './src/js/index.js',
    './src/less/index.less'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },

  devtool: 'eval',

  devServer: {
    port: 8080,
    inline: true,
    contentBase: 'src'
  },

  module: {
    rules: [
      {
        test: /\.js?|.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015',
            'react'
          ]
        }
      },

      {
        test: /\.css?/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },

      {
        test: /\.less?/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/bundle.css')
  ]
};

module.exports = config;
