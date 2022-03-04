const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "[name].[chunkhash].js",
		//chunkhash를 사용하면 파일의 내용이 수정될 때마다 파일 이름이 변경되도록 할 수 있다.
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				//자바스크립트 모듈을 처리하도록 babel-loader를 설정한다. babel.config.js파일로 바벨을 설정할 수도 있지만 여기처럼 babel-loader에서 직접 바벨 설정을 할 수도 있다.
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react"],
					},
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(), //웹팩이 실행될 때마다 dist 폴더를 정리하도록 clean-webpack-plugin을 설정한다.
		new HtmlWebpackPlugin({ template: "./template/index.html" }), //index.html파일이 자동으로 생성되도록 html-webpack-plugin을 설정한다.
		//이때 우리가 원하는 형태를 기반으로 index.html팡리이 생성되도록 template옵션을 설정한다
		new webpack.DefinePlugin({
			//DefinePlugin은 웹팩 모듈에 포함되어 있다.
			APP_VERSION: '"1.2.3"', //또는 JSON.stringify('1.2.3')
			//APP_VERSION 문자열을 '1.2.3'으로 대체한다.
			TEN: "10",
			//TEN 문자열을 10으로 대체한다.
		}),
		new webpack.ProvidePlugin({
			React: "react",
			$: "jquery",
			//리액트 모듈과 jquery모듈을 추가
		}),
	],
	mode: "production",
};
