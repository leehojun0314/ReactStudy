const babel = require("@babel/core"); //babel core 모듈을 가져온다.
const fs = require("fs");

const filename = "./src/code.js";
const source = fs.readFileSync(filename, "utf8"); //컴파일 할 파일의 내용을 가져온다.
const presets = ["@babel/preset-react"];
/* 바벨은 컴파일 시 다음 세 단계를 거친다.
파싱(parse)단계 : 입려된 코드로부터 ast(abstract synctax tree)를 생성한다.
변환(transform) 단계: AST를 원하는 형태로 변환한다
생성(generate) 단계: AST를 코드로 출력한다.
 */
/* AST는 코드의 구문(synctax)이 분석된 결과를 담고 있는 구조체다.
코드가 같다면 AST도 같기 때문에 
같은 코드에 대해서 하나의 AST를 만들어 놓고 재사용할 수 있다.
*/
const { ast } = babel.transformSync(source, {
	/* 코드는 생성하지 않고 AST만 생성한다. 
    프리셋은 두 가지  설정 모드 같으므로 AST를 만들 때 해당 프리셋을 미리 적용한다. */
	filename,
	ast: true,
	code: false,
	presets,
	configFile: false,
});
const { code: code1 } = babel.transformFromAstSync(ast, source, {
	//이렇게 만들어진 ast로 첫번째 설정의 플러그인이 반영된 코드를 생성한다.
	filename,
	plugins: ["@babel/plugin-transform-template-literals"],
	configFile: false,
});
const { code: code2 } = babel.transformFromAstSync(ast, source, {
	filename,
	plugins: ["@babel/plugin-transform-arrow-functions"],
	configFile: false,
});
//설정의 개수가 많아질 수록 이 방식의 효율은 높아진다.
console.log("code: /n", code1);
console.log("code2:/n", code2);
