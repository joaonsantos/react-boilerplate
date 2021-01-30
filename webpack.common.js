const path = require('path');
const { mode } = require("webpack-nano/argv");
const { MiniHtmlWebpackPlugin} = require("mini-html-webpack-plugin");

const headHtml = `<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`;
const bodyHtml = `<div id="root"></div><noscript>You need to enable JavaScript to run this app.</noscript>`;

module.exports = {
  mode: mode,
  entry: './src/index.js',
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
                  "targets": "> 0.25%, not dead"
                }
              ],
              "@babel/preset-react"
            ],
            plugins: [
              "react-hot-loader/babel"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new MiniHtmlWebpackPlugin({
      filename: 'index.html',
      context: {
        title: 'React Boilerplate',
        htmlAttributes: {
          lang: 'en'
        },
        head: headHtml,
        body: bodyHtml,
      },
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/"),
  },
};
