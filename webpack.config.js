const path = require('path');

module.exports = env => ({
  mode: env.NODE_ENV,
  entry: ['@babel/polyfill', './static/src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/static/'),
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});
