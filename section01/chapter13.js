// 콜백 함수
// -> 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미
function main(value) {
  // console.log(1);
  // console.log(2);
  value(); // 원하는 타이밍에 선언할 수 있다.
  // console.log('end');
}
// function sub() {
//   console.log('I am sub');
// }
main(() => {
  // console.log('I am sub');
});

// 2. 콜백함수의 활용
// -> 중복코드 제거
function repeat(count, callback) {
  for(let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}
function repeatDouble(count) {
  for(let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});
// repeatDouble(5);
repeat(5, (idx) => {
  console.log(idx * 2);
});