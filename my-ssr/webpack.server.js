const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  externals: [nodeExternals()],
  // module: {
  //   rules: [{
  //     test: /\.css?$/,
  //     // 该loader的作用是将css文件转化为style标签插入到html的header中。
  //     use: ['isomorphic-style-loader', {
  //       loader: 'css-loader',
  //       options: {
  //         modules: true
  //       }
  //     }]
  //   }]
  // },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}

module.exports = merge(config, serverConfig)