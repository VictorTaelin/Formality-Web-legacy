const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.formality$/i,
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'docs')
  }
};
