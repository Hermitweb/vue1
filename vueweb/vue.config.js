module.exports = {
    publicPath:'./',  // 执行 npm run build 
    devServer: {
        host: "localhost", // 设置启动项目网址
        port: 8080, // 设置启动项目端口号
        https: false, // 是否使用https协议
        open: true, // 设置是否自动打开浏览器
        hotOnly: false, // 是否开启热更新
    }
}
