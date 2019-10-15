const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
}
