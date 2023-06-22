const path = require('path');

module.exports = {
  presets: [
    // Babel presets 설정
  ],
  plugins: [
    // 다른 Babel 플러그인 설정
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          // 여기에 별칭 설정
          '@component': path.resolve(__dirname, 'src/component'),
          '@': path.resolve(__dirname, 'src')
        }
      }
    ]
  ]
};