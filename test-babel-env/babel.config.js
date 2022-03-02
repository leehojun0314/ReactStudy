const presets = [
	[
		"@babel/preset-env",
		//@babel/preset-env 프리셋을 사용한다.
		{
			targets: {
				chrome: "40",
				//크롭 버전을 최소 40으로 설정한다.
			},
			useBuiltIns: "usage",
			//useBuiltIns 속성은 폴리필과 관련된 설정이다. useBuiltIns 속성에 entry를 입력하면 지원하는 브라우저에서 필요한 폴리필만 포함시킨다.
			corejs: {
				version: 3,
				//바벨에게 core-js 버전을 알려준다.
				proposals: true,
			},
		},
	],
];
module.exports = { presets };
