const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'
})