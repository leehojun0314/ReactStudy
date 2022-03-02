const element = <div>babel test</div>;
const text = `element type is ${element.type}`;
const add = (a, b) => a + b;

// 이제 콘솔에 npx babel src/example-extends/code.js를 실행
// 결과 :
// const element = /*#__PURE__*/React.createElement("div", null, "babel test"); //리액트 프리셋이 적용됐다.
// const text = "element type is ".concat(element.type); //template-literal plugin이 적용됐다

// const add = function (a, b) { //화살표 함수 플러그인이 적용됐다.
//   return a + b;
// }; // 이제 콘솔에 npx babel src/example-extends/code.js를 실행
