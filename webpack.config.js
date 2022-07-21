
const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'public')
    
  },
  module: {
    rules: [
      {
        Test: /\.ts$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'src') 
        
      }
    ]
  }
}