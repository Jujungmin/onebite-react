// 1. 함수 표현식
// -> 호이스팅이 되지 않는다.
function funcA() {
  console.log('funcA');
  // return undefined; // return을 적지 않으면 내부적으로 return undefined
}
let varA = funcA(); // funcA 출력
console.log(varA); // funcA undefined

function funcB() {
  console.log('funcB');
}
// 1. 이 부분을 함수 표현식으로 나타내면,
let varB = funcB; // funcB라는 함수의 주소를 varB 변수에게 똑같이 나눠줌
varB(); // ()는 함수 실행

// 2. 이렇게 된다.
// let varB = function funcB() { // funcB는 값으로서 함수가 생성된것이라 익명함수로 진행해도 됨
//   console.log('FuncB');
// }
let varB = function () {
  console.log('FuncB');
}

// 2. 화살표 함수
// let varC = function() {
//   return 1;
// }
let varC = (index) => {
  return index + 1;
}

console.log(varC(10));