const path = require('path');

module.exports = {
  // Webpack 구성 설정
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, 'src/component'),
      '@': path.resolve(__dirname, 'src')
    }
  }
};