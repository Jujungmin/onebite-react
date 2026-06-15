// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
// console.log(date1);

let date2 = new Date('1997/01/07/10:10:10');
// console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// UTC : 세계 모든나라가 표준으로 사용하는 시간이 시작되는 지점
let ts1 = date1.getTime();

let date4 = new Date(ts1);
// console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // JS는 월은 0부터 시작
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
// date1.setFullYear(2023);
// date1.setMonth(2); // 3월
// date1.setDate(30);
// date1.setSeconds(59);
// console.log(date1);


// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 날짜만 출력 // Thu Mar 30 2023
console.log(date1.toLocaleDateString()); // 현지화되게 출력 2023. 3. 30