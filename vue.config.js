module.exports = {
    devServer: {
      proxy: {
        '/api': {
          // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
          target: 'http://192.168.2.140:8000',
          // https://fast-sands-51937.herokuapp.com/
          // 允许跨域
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
  };