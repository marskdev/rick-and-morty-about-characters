const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.pug$/,
				use: {
					loader: "pug-loader",
					options: {
						pretty: true,
					},
				},
			},
		],
	},
	plugins: [
		new HtmlPlugin({
			template: "./public/index.pug",
		}),
	],
};
