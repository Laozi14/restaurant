const path = require('path');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  entry: './src/index.js', // Specify your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
