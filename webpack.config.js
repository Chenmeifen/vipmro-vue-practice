var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = path.resolve;
const publicPath = '';

module.exports = (options = {}) => ({
    entry: {
        vendor: './src/vendor',
        index: './src/main.js'
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].js',
        publicPath: options.dev ? '/assets/' : publicPath
    },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
          test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
          use: [{
              loader: 'url-loader',
              options: {
                  limit: 10000
              }
          }]
      }
    ]
  },
  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
          names: ['vendor', 'manifest']
      }),
      new HtmlWebpackPlugin({
          template: 'src/index.html'
      })
  ],
  resolve: {
    alias: {
        '~': resolve(__dirname, 'src'),
        'vue': 'vue/dist/vue.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
})
