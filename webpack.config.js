const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Set mode to development
  entry: './src/index.js', // Main JavaScript entry file
  output: {
    filename: 'bundle.js', // Output JavaScript file
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the output directory before each build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // HTML template file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Match CSS files
        use: ['style-loader', 'css-loader'], // Loaders for handling CSS
      },
    ],
  },
  devServer: {
    static: './dist', // Directory to serve
    open: true, // Automatically open the browser
  },
};
