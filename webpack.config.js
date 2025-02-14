const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const Dotenv = require("dotenv-webpack");

const path = require("path");

module.exports = (env) => {
  const mode = env.NODE_ENV ?? "development";
  const envFile = mode === "development" ? ".env.dev" : ".env";

  return {
    mode: mode,
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        "@types": path.resolve(__dirname, "types/"),
        "@api": path.resolve(__dirname, "src/api/"),
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
          use: ["style-loader", "css-loader"],
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
        /** @FIXME when use HTML biases */
      }),
      new Dotenv({
        path: envFile,
      }),
    ],
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
