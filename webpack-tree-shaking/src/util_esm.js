export function func1() {
	console.log("func1", arr.length);
}
export function func2() {
	console.log("func2");
}
const arr = [];
export function func3() {
	arr.push(10); //func3 함수는 전역 변수를 변경한다.
	console.log("func3");
}
func3();
//모듈이 평가(evaluation)될 때 func3 함수가 실행된다. 모듈은 최초로 사용될 때 한 번 평가되는데, 이때 전역 변수 arr이 변경된다.
// 만약 나무 흔들기 단계에서 func3함수가 제거되면 func1함수는 의도한 대로 동작하지 않는다.
//다행히 웹팩은 위와같이 모듈이 평가되는 시점에 호출되는 함수를 제거하지 않는다.
