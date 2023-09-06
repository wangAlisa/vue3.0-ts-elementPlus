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
};
