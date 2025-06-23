import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPLugin from "mini-css-extract-plugin";

export default function buildPlugins({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPLugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin()
  ];
}
