const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProgressPlugin } = require("webpack");
module.exports = {
	entry: Path.resolve(__dirname, "../src/index.tsx"),
	output: {
		filename: "[name].js",
		path: Path.resolve(__dirname, "../dist"),
	},

	devServer: {
		contentBase: Path.resolve(__dirname, "../dist"),
		port: 3000,
		open: true,
		hot: true,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@": Path.resolve(__dirname, "../src"),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				include: /src/,
				use: "ts-loader",
			},
			{
				test: /\.scss$/,
				include: /src/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
						},
					},
					"sass-loader",
				],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: Path.resolve(__dirname, "../index.html"),
			title: "俄罗斯方块-胡志武",
		}),
	],
};
