// const path = require("path");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// module.exports = {
// 	entry: {
// 		//각 페이지에서 자바스크립트 파일을 entry로 입력한다.
// 		page1: "./src/index1.js",
// 		// page2: "./src/index2.js",
// 	},
// 	output: {
// 		filename: "[name].js",
// 		path: path.resolve(__dirname, "dist"),
// 	},
// 	plugins: [new CleanWebpackPlugin()], //dist 폴더를 정리하기 위해 clean-webpack-plugin을 사용한다
// 	mode: "production",
// 	optimization: {
// 		splitChunks: {
// 			//optimization의 splitChunks속성을 이용하면 코드를 분할할 수 있다
// 			// chunks: "all", //chunks 속성의 기본값은 동적 임포트만 분할하는 async다.
// 			//우리는 동적 임포트가 아니더라도 코드가 분할되도록 all로 설정한다.
// 			// name: "vendor",
// 			// chunks: "async", //동적 임포트만 코드를 분할하도록 설정되어 있다.
// 			chunks: "all",
// 			minSize: 10, //파일 크기가 30kb이상 인 모듈만 분할 대상으로 한다.
// 			minChunks: 1, //한개 이상의 청크(chunk)에 포함되어 있어야 한다.
// 			cacheGroups: {
// 				//파일 분할은 그룹별로 이뤄진다.
// 				// 기본적으로 외부모듈(vendors)과 내부모듈(default) 두 그룹으로 설정되어 있다.
// 				//외부 모듈은 내부 모듈보다 비교적 낮은 비율로 코드가 변경되기 떄문에 브라우저에 오래 캐싱될 수 있다는 장점이있다.
// 				// default: {
// 				// 	minChunks, //내부 모듈은 두개이상의 번들파일에 포함되어야 분할된다.
// 				// 	priority: -20,
// 				// 	reuseExistingChunk: true,
// 				// },
// 				// vendors: {
// 				// 	test: /[\\/]node_modules[\\/]/,
// 				// 	priority: 2,
// 				// 	name: "venders",
// 				// },
// 				defaultVendors: {
// 					test: /[\\/]node_modules[\\/]/,
// 					// priority: -10,
// 					// minChunks: 1,
// 					priority: 1,
// 					name: "vendors",
// 				},
// 				reactBundle: {
// 					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
// 					name: "react.bundle",
// 					priority: 2,//이 그룹의 우선순위가 높아야 리액트 모듈이 vendors그룹에 들어가지 않는다.
// 					minSize: 100,
// 				},
// 			},
// 		},
// 	},
// };

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: {
		page3: "./src/index3.js",
	},
	output: {
		filename: "[name].js",
		chunkFilename: "[name].chunk.js",
		//chunkFilename 속성을 이용해서 동적 임포트로 만들어지는 번들 파일의 이름을 설정한다.
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [new CleanWebpackPlugin()],
	mode: "production",
};
