// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr = [1, 2, 3];
arr.forEach(function(item, idx, arr) {
  // console.log(idx, item);
});

let doubleArr = [];
arr.forEach((item) => {
  doubleArr.push(item * 2);
})
// console.log(doubleArr); // [ 2, 4, 6 ]

// 2. includes
// 배열의 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isIncludes = arr2.includes(3);
// console.log(isIncludes);

// 3. indexOf: 얕은비교
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(1);
// console.log(index); // 0

let objectArr = [
  {name: 'AAA'},
  {name: 'BBB'},
];
console.log(
  // objectArr.indexOf({name: 'AAA'}) //  배열에서 객체 직접 찾지 못한다.
)

// 4. findIndex: 콜백함수를 이용해 복잡한 객체도 쉽게 찾을 수 있다.
// 모든 요소를 순회하면서, 콜백함수를 만족하는 메서드
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 2);
console.log(findedIndex, ': findedIndex');

//  5. find
//  모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데 요소를 그대로 반환
let arr5 = [
  {name: 'AAA'},
  {name: 'BBB'},
]

const finxed = arr5.find(
  (item) => item.name === 'AAA'
);
// console.log(finxed);