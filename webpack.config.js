var webpack = require('webpack');
module.exports = {
  entry: './',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
  	loaders: [
      {
      	test: /\.js$/,
      	exclude: /(node_modules)/,
        loader:  'babel-loader',
        query: {
          presets: ['react', 'es2015']    
        }
      }
  	]
  },
  devServer: {
  	publicPath: '/',    
  	filename: 'bundle.js',  
  	host: '0.0.0.0',
  	port: 8087
  }
}