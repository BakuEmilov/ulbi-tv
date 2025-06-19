import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, { WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";

export default function buildPlugins({
  paths,
}: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
