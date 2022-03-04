// import { func1 } from "./util_esm"; //ESM 문법으로 작성된 모듈을 ESM 문법으로 가져오고 있다. func1 함수만 사용하고 func2함수는 사용하지 않는다.
// func1();
//웹팩 실행 후 번들 파일을 열어보면 func2함수가 보이지 않는다. 나무 흔들기 덕분에 func2함수가 제거된 것.

// import { func1 } from "./util_commonjs"; //commonJS 문법으로 작성된 모듈을 ESM문법으로 가져오고 있다.
// func1();
//나무흔들기는 다음과 같은 경우에 적용되지 않는다.
/* 
    1. 사용되는 모듈이 ESM(ECMAScript Modules)이 아닌 경우
    2. 사용하는 쪽에서 ESM이 아닌 다른 모듈 시스템을 사용하는 경우
    3. 동적 임포트(dynamic import)를 사용하는 경우
*/

import("./util_esm").then((util) => util.func1());
//동적 임포트를 사용하면 동적으로 모듈을 가져올 수 있다. 하지만 동적 임포트를 사용하면 나무흔들기가 동작하지 않는다.
