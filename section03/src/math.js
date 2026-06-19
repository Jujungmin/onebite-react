// math 모듈
// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// // 함수를 내보냄
// module.exports = {
//   add: add, // 키 값이 같을 경우 add 만 넣어도됨
//   sub,
// }

// export { add, sub };

export function add(a, b) {
  return a + b;
}
export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}