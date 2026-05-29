// 1. Falsy 한 값(거짓 같은 값)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = '';
let f7 = 0n; // BigInt(길이의 제약없이 정수를 다루게 해주는 숫자형)

if(!f2) {
  // console.log('falsy');
}

// 2. Truthy 한 값(참 같은 값)
// -> 7가지 Falsy한 값을 제외한 나머지 값
let t1 = 'hello';
let h2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if(t5) {
  // console.log('Truthy');
}

// 3. 활용 사례
function printName(person) {
  if(!person) {
    console.log('person의 값이 없음');
    return;
  }
  console.log(person.name);
}

let person = {name: 'user'};
printName(person);