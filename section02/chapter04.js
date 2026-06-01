// Spread 연산자
// -> 객체나 배열에 저장된 여러개의 값을 개별로 훝뿌려주는 역할
let arr1  = [1, 2, 3];
let arr2  = [4, ...arr1, 5, 6];
// 안전하면서도 편하게 가능

let obj1 = {
  a: 1,
  b: 2
}
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
}

function funcA(p1, p2, p3) {
  // console.log(p1, p2, p3);
}
// funcA(...arr1);

// Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
function funcB(one ,two, ...rest) {
  // console.log(one, two, ...rest);
}
funcB(...arr1);

let colors = ['red', 'blue', 'green', 'yellow'];
// c1에는 0번째 주고, 나머지는 'rest'라는 이름의 변수에 배열로 다 뭉치기
// let [c1, ...rest] = colors;
// console.log(c1); // red
// console.log(rest); // ['blue', 'green', 'yellow']

// 함수의 매개변수에서 모으기
function sum(one, ...rest) {
	// console.log(one, rest);
}
sum(...colors);


