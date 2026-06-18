// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'AAA',
        id: 'BBB'
      })
    }, 1500)
  });
}
// console.log(getData())

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
// function printData() {
//   getData().then((result) => {
//     console.log(result);
//   });
// }
async function printData() {
  const data = await getData();
  console.log(data);
}
// printData();


// 1. 콜백 매개변수는 지우고, Promise를 return!
function orderFood() {
	return new Promise((resolve) => {
		setTimeout(() => {
			const food = '떡볶이';
			// 콜백(food) 대신 resolve(food)로 바통터치
			resolve(food);
		}, 3000);
	});
}

// 2. 음식을 식히는 약속
function cooldownFood(food) {
	return new Promise((resolve) => {
		setTimeout(() => {
			const cooldownedFood = `식은 ${food}`;
			resolve(cooldownedFood);
		}, 2000);
	});
}

// 3. 음식을 냉동하는 약속
function freezeFood(food) {
	return new Promise((resolve) => {
		setTimeout(() => {
			const freezedFood = `냉동된 ${food}`;
			resolve(freezedFood);
		}, 1500);
	})
}

async function startDinner() {
	console.log('주문을 시작합니다!');
	
	// orderFood가 Promise를 리턴하므로 이제 await 브레이크가 완벽하게 작동
	const food = await orderFood();
	const cooldowned = await cooldownFood(food);
	const frozen = await freezeFood(cooldowned);
	console.log(`최종상태: ${frozen}`);
}
// startDinner();

// console.log(`주문을 시작합니다`);
// orderFood()
//   .then((food) => cooldownFood(food))
//   .then((cooldowned) => freezeFood(cooldowned))
//   .then((frozen) => console.log(`최종상태: ${frozen}`))

// function orderFood(callback) {
//   setTimeout(() => {
//     const food = '떡볶이';
//     callback(food);
//   }, 2000)
// }
// orderFood((value) => {
//   console.log(value);
// })

function 카페_주문() {
	// 손님에게 진동벨(promise)을 즉시 리턴(return)해서 줌.
	return new Promise((resolve, reject) => {
		let 원두_있음 = true;
		console.log('주방에서 커피를 만들기 시작합니다..');
		setTimeout(() => {
			if(원두_있음) {
				resolve('따뜻한 아메리카노'); // 성공 버튼(데이터 전달)
			} else {
				reject('원두 매진'); // 실패 버튼(이유 전달)
			}
		}, 3000);
	})
}

async function 카페_방문() {
  console.log('가게에 들어옴');
  const coffee = await 카페_주문();
  console.log(`${coffee} 수령 완료!`);
  console.log(`자리에 앉아서 마시기`)
}
카페_방문();