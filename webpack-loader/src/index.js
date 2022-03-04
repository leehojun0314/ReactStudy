import React from "react";
import ReactDOM from "react-dom";
import Style from "./App.css"; //자바스크립트 모듈에서 css 모듈을 불러옫나. 현재는 css모듈을 처리하는 로더가 없기 때무넹 웹팩을 실행하면 에러가 발생한다.
import Icon from "./icon.png";
import Json from "./data.json";
import Text from "./data.txt";
console.log({ Style });
function App() {
	return (
		<div className="container">
			<h3 className="title">webpack example</h3>
			<div>{`name: ${Json.name}, age: ${Json.age}`}</div>
			<div>{`text: ${Text}`}</div>
			<img src={Icon} />
		</div>
	);
}
ReactDOM.render(<App />, document.getElementById("root"));
