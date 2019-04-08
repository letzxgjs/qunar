const path = require('path')
// const Webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  // configureWebpack: {
  //   devtool: 'cheap-module-eval-source-map'
  // },
  configureWebpack: config => {
    if (isProd) {
      // config.plugins.push(new Webpack.optimization.minimize())
      config.plugins.push(new BundleAnalyzerPlugin())
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
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
