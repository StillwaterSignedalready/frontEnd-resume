
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output:{
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0' },
    ]
  },
  plugins: [
    // new HtmlwebpackPlugin({
    //   title: 'Webpack-demos',
    //   filename: 'index.html'
    // }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
};