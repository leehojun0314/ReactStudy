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
			{
				test: /\.css$/, //css확장자를 갖는 모듈은 css-loader가 처리하도록 설정한다.
				use: ["style-loader", "css-loader"], //로더를 배열로 입력하면 오른쪽 로더부터 실행된다.
				//style-loader는 css-loader가 생성한 css 데이터를 style태그로 만들어서 HTML head에 삽입한다.
				//따라서 번들 파일이 실행되다가 에러가 발생하면 style 태그가 삽입되지 않을 수 있다.
			},
			// {
			// 	test: /\.(png|jpg|gif)$/,
			// 	//png 모듈은 file-loader가 처리하도록 설정한다
			// 	use: "file-loader",
			// },
			{
				test: /\.txt$/,
				//txt모듈은 raw-loader가 처리하도록 설정한다.
				use: "raw-loader",
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 54684060,
							//url-loader는 파일의 크기가 이 값보다 작은 경우에는 번들 파일에 파일의 내용을 포함시킨다.
							//만약 파일의 크기가 이 값보다 큰 경우에는 다른 로더가 처리할 수 있도록 fallback 옵션을 제공한다.
							//fallback 옵션을 입력하지 않으면 기본적으로 file-loader가 처리 하게 되어있다.
						},
					},
				],
			},
		],
	},
	mode: "production",
};
