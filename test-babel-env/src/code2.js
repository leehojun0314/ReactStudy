//useBuiltIns 속성에 usage를 입력하면 코드에서 사용된 기능의 폴리필만 추가된다.
const p = Promise.resolve(10);
const obj = {
	a: 10,
	b: 20,
	c: 30,
};
const arr = Object.values(obj);
const exist = arr.includes(20);
