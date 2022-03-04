function func1() {
	console.log("func1");
}
function func2() {
	console.log("func2");
}
module.exports = { func1, func2 }; //commonJS에서는 module.exports, require 등의 키워드를 사용한다.
//commonJS 문법은 노드(node.js)에서 많이 사용된다.
