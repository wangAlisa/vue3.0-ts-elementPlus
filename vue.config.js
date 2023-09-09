// eslint-disable-next-line no-undef
module.exports = {
  // css: {
  //   loaderOptions: {
  //     less: {
  //       lessOptions: {},
  //     },
  //   },
  // },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "管理后台系统";
      return args;
    });
  },
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        // 请求接口中要替换的标识
        target: process.env.VUE_APP_PROXY_TARGET, // 代理地址
        ChangeOrigin: false, // 是否允许跨域
        secure: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "", // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        },
      },
    },
  },
};
