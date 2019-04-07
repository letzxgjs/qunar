const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  configureWebpack: {
    devtool: 'cheap-module-eval-source-map'
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@common', resolve('src/common'))
      .set('@style', resolve('src/assets/styles'))
    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    }
  }
}
