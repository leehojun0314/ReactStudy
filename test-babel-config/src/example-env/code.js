const element = <div>babel test2</div>;
const text = `element type is ${element.type}`;
const add = (a, b) => a + b;

/* 바벨에서 현재 환경은 다음과 같이 결정된다.
process.env.BABEL_ENV || process.env.NODE_ENV || "development"
터미널 실행: 
set NODE_ENV=production && npx babel ./src/example-env
*/
