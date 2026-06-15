// Promise
// 비동기 작업을 효율적으로 처리해주는 자바스크립트 내장객체
// 여러개의 작업을 동시에 실행하거나 다시 시작해주는 객체

const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수 => executor
  // reslove: 비동기 작업 성공
  // reject: 비동기 작업 실패
  setTimeout(() => {
    const num = 10;
    if(typeof num === 'number') {
      resolve(num + 10);
    } else {
      reject('num이 숫자가 아닙니다');
    }
    // resolve('안녕!'); // Promise {<fulfilled>: '안녕!'}
    // reject('왜 실패했는지 이유...'); // Promise {<rejected>: '왜 실패했는지 이유...'}
  }, 2000);
});


// setTimeout(() => {
  //   console.log(promise);
  // }, 3000);
  
// promise의 결과값을 직접 이용
// 프로미스 메서드 then
// -> 그 후에
// 프로미스 비동기가 성공하면 then 실행
// promise.then((value) => {
//   console.log(value);
// });

// 프로미스 비동기가 실패하면 catch 실행
// promise.catch((error) => {
//   console.log(error);
// });

// 프로미스 체이닝
promise.
  then((value) => {
    console.log(promise, value);
  })
  .catch((error) => {
    console.log(promise, error);
  })

