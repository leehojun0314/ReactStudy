// import React from "react";
import ReactDom from "react-dom";

function App() {
	return (
		<div>
			<h3>안녕하세요, 웹팩 플러그인 예제입니다.</h3>
			<p>html-webpack-plugin 플러그인을 사용합니다.</p>
			<p>{`앱 버전은 ${APP_VERSION}입니다`}</p>
			{/* APP_VERSION, TEN 문자열을 우리가 원하는 문자열로 대체한다. */}
			<p>{`10 * 10 = ${TEN * TEN}`}</p>
		</div>
	);
}
ReactDom.render(<App />, $("#root")[0]);
