import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, { WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPLugin from "mini-css-extract-plugin"

export default function buildPlugins({
  paths,
}: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new  MiniCssExtractPLugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    })
  ];
}
