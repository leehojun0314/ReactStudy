const path = require("path");
module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		// js확장자를 갖는 모듈은 babel-loader가 처리되도록 설정한다.
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},
	mode: "production",
};
