const { defineConfig } = require('@vue/cli-service')
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  devtool: "source-map",
  plugins: [
    sentryWebpackPlugin({
      //组织名称
      org: 'houpu',
      //项目名称
      project: "vue-sentry",
      //密钥
      authToken: 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,
    }),
  ],

})
