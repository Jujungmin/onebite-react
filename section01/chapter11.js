// 함수

// 함수 선언
// 호이스팅 : 선언문이 함수호출보다 아래로 있어도 위로 끌어올려서 실행시켜 준다.
function greting() {
  // console.log('안녕하세요!');
}
// console.log('호출 전');
greting(); // 함수 호출
// console.log('호출 후');

function getArea(width, height) { // width, height 매개변수

  function another() {
    console.log('another');
  }
  another(); // 중첩함수
  let area = width * height;
  return area; // 반환값
  console.log('hello'); // return 뒤 실행X
}

let area1 = getArea(10, 20); // 10, 20 인수
let area2 = getArea(30, 20);

console.log(area1, area2);
