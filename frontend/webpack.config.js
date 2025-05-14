import path from "path";
import webpack from "webpack";

const __dirname = path.resolve(); // Resolve current directory

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "static", "frontend"),
    filename: "main.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/, // This includes both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env", // For modern JavaScript syntax
              "@babel/preset-react", // For JSX syntax
            ],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Ensure .jsx files are handled
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
    }),
  ],
  optimization: {
    minimize: false,
  },
  devtool: "source-map",
};
