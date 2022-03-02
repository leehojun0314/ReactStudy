const presets = ["@babel/preset-react"];
const plugins = [
	["@babel/plugin-transform-template-literals", { loose: true }],
];
module.exports = { presets, plugins };
/* 리액트 프리셋과 loose 옵션을 갖는 템플릿 리터럴 플러그인을 설정했다.
 */
