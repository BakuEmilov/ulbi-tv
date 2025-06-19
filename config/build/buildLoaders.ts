import { RuleSetRule } from "webpack";

export default function buildLoaders(): RuleSetRule[] {
  const typscriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typscriptLoader];
}
