const path = require("path");
const { mode } = require("webpack-nano/argv");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const headHtml = `<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`;
const bodyHtml = `<div id="root"></div><noscript>You need to enable JavaScript to run this app.</noscript>`;

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
              [
                "@babel/preset-react",
                {
                  development: false,
                  runtime: "automatic",
                  importSource: "react",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        sideEffects: true,
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new MiniHtmlWebpackPlugin({
      filename: "index.html",
      publicPath: "/",
      context: {
        title: "React Boilerplate",
        htmlAttributes: {
          lang: "en",
        },
        head: headHtml,
        body: bodyHtml,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    assetModuleFilename: "images/[hash][ext][query]",
  },
};
