const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const Dotenv = require("dotenv-webpack");

const path = require("path");

module.exports = (env) => {
  const mode = env.NODE_ENV ?? "development";
  const envFile = mode === "development" ? ".env.dev" : ".env";
  const devTool = mode === "development" ? "inline-source-map" : false;

  return {
    mode: mode,
    entry: "./src/index.tsx",
    devtool: devTool,
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      clean: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        "@types": path.resolve(__dirname, "types/"),
        "@api": path.resolve(__dirname, "src/api/"),
        "@routes": path.resolve(__dirname, "src/routes/"),
        "@utils": path.resolve(__dirname, "src/utils/"),
        "@components": path.resolve(__dirname, "src/components/"),
        "@pages": path.resolve(__dirname, "src/pages/"),
        "@styles": path.resolve(__dirname, "src/styles/"),
        "@assets": path.resolve(__dirname, "src/assets/"),
        Types: path.resolve(__dirname, "src/types/"),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack", "url-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new InterpolateHtmlPlugin({
        PUBLIC_URL: "public",
      }),
      new Dotenv({
        path: envFile,
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: "bundle-report.html",
      }),
    ],
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: "all",
    //   },
    //   runtimeChunk: "single",
    // },
    devServer: {
      static: [
        { directory: path.join(__dirname, "dist") },
        { directory: path.join(__dirname, "public") },
      ],
      historyApiFallback: true,
      compress: true,
      port: 8080,
    },
    watchOptions: {
      ignored: "/node_modules/",
    },
  };
};
