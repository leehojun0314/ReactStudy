const element = <div>babel test2</div>;
const text = `element type is ${element.type}`;
const add = (a, b) => a + b;

/* 
1. package.json 파일을 만났고 package.json 파일에 babel 속성이 없으므로 지역 설정 파일은 없다.
2. 프로젝트 루트의 babel.config.js 파일이 전체 설정 파일이다.
*/
