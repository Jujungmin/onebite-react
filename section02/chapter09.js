// 5가지 배열 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  {name: 'AAA', hobby: '테니스'},
  {name: 'BBB', hobby: '테니스'},
  {hobby: '독서'},
];
// const tennisPeople = arr1.filter((item) => {
//   if(item.hobby === '테니스') return true;
// });
// const tennisPeople = arr1.filter(item => item.hobby === '테니스');
// console.log(tennisPeople); // [ { name: 'AAA', hobby: '테니스' }, { name: 'BBB', hobby: '테니스' } ]

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모여서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, index, arr) => {
  return item * 2; // 반환값 설정 가능
})
// console.log(mapResult1); // [ 2, 4, 6 ] 기존 arr2 복사하여 새로운 배열 만듦

// let names = arr1.map((item) => {
//   if(item.name) return item.name;
// });
let names = arr1.map(item => item.name);
// console.log(names)

// 3. sort
// 배열은 사전순으로 정렬하는 메서드
let arr3 = ['b', 'a', 'c'];
let arrNum = [10, 4, 5];
arr3.sort();
// console.log(arr3);
arrNum.sort((a, b) => {
  if(a > b) {
    // b가 a 앞에 와라
    return 1; // 오름차순
    // return -1; // 내림차순
  } else if(a < b) {
    // a가 b 앞에 와라
    return -1; // 오름차순
    // return 1; // 내림차순
  } else {
    return 0;
  }
});
// console.log(arrNum); // [ 4, 5, 10 ] 오름차순 정렬

// 4. toSorted : 최신함수
// 원본 배열은 냅두고 새로운 배열을 반환하는 메서드
let arr5 = ['c', 'e', 'b'];
const sorted = arr5.toSorted();
// console.log(arr5); // [ 'c', 'e', 'b' ]
// console.log(sorted) // [ 'b', 'c', 'e' ]


// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ['hi', 'i am', 'winerlood'];
const joined = arr6.join(' '); // hi i am winerlood
// console.log(arr6, joined); // [ 'hi', 'i am', 'winerlood' ] hi i am winerlood