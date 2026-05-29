// 1. 상수 객체
// 상수에 객체를 보관한다고 하더라도 수정, 삭제, 추가가 가능하다.
const animal = {
  type: '고양이',
  name: '나비',
  color: 'black',
};

animal.age = 2;
animal.name = '까망이';

delete animal.color;

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함(객체의 동작을 정의)
const person = {
  name: 'user',
  // sayHi: function() {
  //   console.log('안녕!')
  // },
  // 화살표함수
  sayHi: () => {
    console.log('안녕!')
  },
  // 메서드 선언
  sayAge() {
    console.log('27');
  }
};

person['sayHi']();
person.sayAge();