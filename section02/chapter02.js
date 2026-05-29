// 단락 평가
// true || true : 첫번째 true 값 찍힘
// true && true : 뒤 true 값 찍힘

function returnfalse() {
  console.log('False 함수')
  return undefined;
}
function returnTrue() {
  console.log('True 함수')
  return 10;
}
// console.log(returnfalse() && returnTrue());

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  // console.log(name || 'person의 값이 없음');
}
printName({name: 'AAA'});

function returnTrue1() {
  return 10;
}
function returnTrue2() {
  return 20;
}

// console.log(returnTrue1() && returnTrue2());