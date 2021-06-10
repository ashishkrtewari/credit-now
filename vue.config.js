module.exports = {
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    devtool: "source-map",
  },
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
  transpileDependencies: ["quasar"],
};
