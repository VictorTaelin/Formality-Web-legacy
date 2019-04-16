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
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[path][name].[ext]',},
          },
        ],
      }
      
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'docs')
  },
};
