var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname+'/src',
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.s?css$/,
        loaders: [
          {
            loader: 'style-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js",
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};