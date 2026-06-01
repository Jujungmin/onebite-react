// 구조분해할당

// 1. 배열의 구조분해할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; // one, two, three 변수에 1, 2, 3 이 각각 들어간다.

// console.log(one, two, three, four); // 1 2 3 4

// 2. 객체의 구조분해할당
let person = {
  name: 'AAA',
  age: 27,
  hobby: '테니스',
  extra: 'world'
}
let { name, age, hobby, extra = 'hello' } = person;
// console.log(name, age, hobby, extra);

// 3. 객체 구조분해할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name: myAge, age, hobby, extra }) => {
  console.log(myAge, age, hobby, extra);
}
func(person);
