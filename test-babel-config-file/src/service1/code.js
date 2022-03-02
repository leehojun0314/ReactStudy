const element = <div>babel test</div>;
const text = `element type is ${element.type}`;
const add = (a, b) => a + b;

/* 
현재 파일을 위한 설정은 다음과 같이 결정된다.
1. package.json, .babelrc, .babelrc.js 파일을 만날 때 까지 부모 폴더로 이동한다. src/service1/.babelrc파일을 만났고, 그 ㅏㅍ일이 지역 설정 파일이다.
2. 프로젝트 루트의 babel.cofnig.js 파일이 전체 설정 파일이다.
3. 전체 설정 파일과 지역 설정 파일을 병합한다.
*/
// const element = /*#__PURE__*/React.createElement("div", null, "babel test"); //전체 설정 파일의 리액트 프리셋이 적용됐다.
// const text = "element type is ".concat(element.type); //전체 설정 파일의 loose 옵션이 적용되지 않은 것을 확인 할 수 있다. 이는 지역설정이 전체 설정을 덮어쓰기 때문이다.

// const add = function (a, b) {//지역설정 파일의 화살표 함수 플러그인이 적용됐다.
//   return a + b;
// };
