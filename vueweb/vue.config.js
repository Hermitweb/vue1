module.exports = {
  publicPath: './',
  productionSourceMap: false, // 生产环境不输出 source map，减小体积
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    open: true,
    hotOnly: false,
    // 静态资源代理 - 把 /vuetu/ 代理到本地的 80 端口
    proxy: {
      '/vuetu/': {
        target: 'http://localhost/',
        changeOrigin: true,
        secure: false
      }
    }
  },
  configureWebpack: {
    // 生产环境性能优化
    performance: {
      hints: 'warning',
      maxAssetSize: 500 * 1024,
      maxEntrypointSize: 500 * 1024
    },
    // 分割代码块
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          elementUI: {
            name: 'chunk-element-ui',
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            priority: 20
          },
          vendor: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: 10
          }
        }
      }
    }
  }
}
