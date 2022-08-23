// Customized for Aworld System

const path = require('path')
const fs = require('fs')

module.exports = {
  outputDir: path.resolve(__dirname, './server/src/app/'),
  pwa: {
    name: 'Aworld Drive',
    themeColor: '#9013FE',
    msTileColor: '#50E3C2'
  },
  devServer: {
    https: {
    key: fs.readFileSync('./sertifikat/drive.journeys.my.id+5-key.pem'),
    cert: fs.readFileSync('./sertifikat/drive.journeys.my.id+5.pem'),
    },
    proxy: "https://localhost:443"
  },
  pluginOptions: {
    electronBuilder: {
      outputDir: 'build'
    }
  }
};
