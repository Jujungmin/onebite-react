// 6가지의 요소 조작 메서드

// 1. push
// -> 배열의 맨 뒤에 새로운 요소 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6);
// console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(newLength); // 6

// 2. pop
// -> 배열의 맨 뒤에 있는 요소 제거, 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();
// console.log(popedItem , arr2); // 3 [ 1, 2]

// 3. shift
// -> 배열의 맨 앞에 있는 요소 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem, arr3); // 1 [ 2, 3 ]

// 4. unshift
// -> 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// console.log(newLength2, arr4); // 4 [ 0, 1, 2, 3 ]

// shift, unshift는 push,pop보다 비교적 느리게 동작한다. 되도록이면 push, pop사용
// push, pop은 뒤에만 제거하여 인덱스만 추가하거나 삭제하면됨.
// 하지만 shift, unshift는 앞에서 추가,제거하므로 배열의 인덱스가 밀리거나 땡겨짐


// 5. slice
// -> 마치 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 4); // 자르기 시작한 인덱스, 잘라낼 범위 끝 인덱스(+1)
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-2);
console.log(sliced3); // [3, 4, 5]
// console.log(sliced); // [ 3, 4 ]
// console.log(sliced2); // [ 3, 4, 5 ]
// console.log(arr5); // [ 1, 2, 3, 4, 5 ]

// 6. concat
// -> 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);
// console.log(concatedArr); // [ 1, 2, 3, 4 ]