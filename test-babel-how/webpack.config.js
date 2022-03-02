const path = require("path");
module.exports = {
	entry: "./src/code.js", //웹팩으로 번들링 할 파일을 지정
	output: {
		//번들링한 결과를 dist/code.bundle.js 파일로 저장한다.
		path: path.resolve(__dirname, "dist"),
		filename: "code.bundle.js",
	},
	module: {
		rules: [{ test: /\.js$/, use: "babel-loader" }],
		/* 자바스키릅트 파일을 babel-loader가 처리하도록 설정한다. 
        babel-loader는 바벨의 설정 파일을 이용하므로 이전에 만들어놓은 babel.config.js 파일의 내용이 설정값으로 사용됨. */
	},
	optimization: { minimizer: [] },
	// 웹팩은 기본적으로 자바스크립트 파일을 압축한다. 그렇지만 바벨이 제대로 실행됐는지 확인하기 위해 압축기능을 잠시 끄기로한다.
};
