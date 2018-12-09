const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  // {
  //   './dist/app': path.resolve(__dirname, 'src/') // where webpack grabs react files from. usually client/src
  // },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/src') // where to put bundle.js file
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0']
        }
      }
    ]
  },
  externals: {
    'react/addons': true, // important!!
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true
  }
};