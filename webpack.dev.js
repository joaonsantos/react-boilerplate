const path = require('path');
const { merge } = require("webpack-merge");
const common = require('./webpack.common.js');
const { WebpackPluginServe } = require('webpack-plugin-serve');

module.exports = merge(common, {
  watch: true,
  entry: ["./src", "webpack-plugin-serve/client"],
  devtool: "inline-source-map",
  plugins: [
    new WebpackPluginServe({
      host: "127.0.0.1",
      port: process.env.PORT || 3000,
      static: path.join(__dirname, "dist/"),
      open: true,
      progress: "minimal",
      hmr: 'refresh-on-failure',
      liveReload: true,
      waitForBuild: true,
      historyFallback: true,
    }),
  ],
});
