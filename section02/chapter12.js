function add(a ,b, callback) {
  setTimeout(() => {
    const sum = a + b; // 3
    callback(sum);
  }, 3000)
}
add(1, 2, (value) => {
  // console.log(value);
});

// 비동기 작업을 함수의 결과 값으로 함수 외부에 이용하고 싶으면 콜백함수를 이용한다.

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = '떡볶이';
    callback(food);
  }, 3000);
}
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000)
}
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

// 콜백함수를 받는 공통 인수(food)는 점점 깊어짐(가독성이 좋지 않다)
// 콜백지옥 => Promise 로 대응
orderFood((food) => {
  console.log(food);
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);
    freezeFood(food, (freezedFood) => {
      console.log(freezedFood);
    })
  });
});
