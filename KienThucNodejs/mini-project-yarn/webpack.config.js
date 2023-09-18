const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  console.log(env.production);
  console.log(env.development);
  return {
    mode: "production",
    entry: {
      app: path.resolve("src/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
      new HtmlWebpackPlugin({
        title: "React App",
        filename: "index.html",
        template: "src/template.html",
      }),
    ],
    devServer: {
      static: {
        directory: "dist",
      },
      compress: false,
      port: 9000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
  };
};
