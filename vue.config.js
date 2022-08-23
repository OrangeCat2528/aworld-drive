const path = require('path')
module.exports = {
  outputDir: path.resolve(__dirname, './server/src/app/'),
  pwa: {
    name: 'Aworld Manager',
    themeColor: '#9013FE',
    msTileColor: '#50E3C2'
  },
  devServer: {
    proxy: "http://localhost:3344"
  },
  pluginOptions: {
    electronBuilder: {
      outputDir: 'build'
    }
  }
};
