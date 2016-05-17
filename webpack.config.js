
var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/sketch'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, 'src')
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  }
};
