// 1. if 조건문 (if문)

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.
let animal = 'cat';
switch (animal) {
  case 'cat': {
    console.log('cat');
    break;
  }
  case 'dog': {
    console.log('dog');
    break;
  }
  case 'bear': {
    console.log('bear');
    break;
  }
  case 'snake': {
    console.log('snake');
    break;
  }
  case 'tiger': {
    console.log('tiger');
    break;
  }
  default: {
    console.log(' ')
  }
}