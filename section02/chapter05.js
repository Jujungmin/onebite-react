// 원시값 = 불변값
let p1 = 1;
let p2 = p1;
p2 = 2;
// console.log(p1, p2);

// 객체타입 = 가변값
let o1 = {name: 'AAA'};
let o2 = o1; // 얕은복사 : 원본객체가 수정될수있어 위험함
o2.name = 'BBB';
// console.log(o1, o2); // o1도 BBB로 같이 변경


let s1 = {name: 'AAA'};
let s2 = {...s1}; // 깊은복사 : 원본객체가 수정될 일이없어 안전함
s2.name = 'BBB';
// console.log(s1, s2);

// 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다.
let j1 = {name: 'AAA'};
let j2 = j1;
let j3 = {...j1};
j2.name = 'BBB';
console.log(j1 === j2); // 얕은비교: 참조값을 기준으로 비교
console.log(j1 === j3);

console.log(
  JSON.stringify(j1) === JSON.stringify(j2)
  // 깊은비교 : 객체를 문자열로 변환하여 비교(프로퍼티의 값을 비교)
  // JSON.stringify 등의 내장 함수를 이용해야 함
);
