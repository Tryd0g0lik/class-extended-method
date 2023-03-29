// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const { dirname } = require("path");
// const isProduction = process.env.NODE_ENV == "production";

module.exports = {
	mode: "development",
	entry: "./index.js",
  output: {
		path: path.resolve(__dirname, "dist"),

  },

	plugins: [
		new ESLintPlugin({
			files: path.resolve(__dirname, "./src/js")

		}),
    new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: './index.html'
    }),

		new MiniCssExtractPlugin(
			{
				filename: '[name].css',
				chunkFilename: '[id].css'
			}
		),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
	module: {
		rules: [
			{
				test: /\.(js)$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
      {
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader',
				],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

// module.exports = () => {
//   if (isProduction) {
//     config.mode = "production";
//   } else {
//     config.mode = "development";
//   }
//   return config;
// };
