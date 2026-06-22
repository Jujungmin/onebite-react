/* common js */
// const moudleData = require("./math");
// console.log(moudleData.add(1,2));
// console.log(moudleData.sub(1,2));
// const {add , sub} = require("./math");
// console.log(add(1,2));
// console.log(sub(1,2));

/* ESM */
// import mul, {add, sub} from "./math.js"; // 확장자를 붙여줘야 함

// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(2,3));

// node_module : 설치한 라이브러리 실제 저장장소
// package-lock : package.json 보다 정확한 버전 정보를 갖고 있음


import randomColor from "randomcolor"; // 라이브러리는 from 뒤에 이름만 명시
const color = randomColor();
console.log(color);

// package-lock 이 없어져도 package.json만 있어도 npm i 해도 재설치가 가능. 남들한테 공유할때 node_modules 삭제하고 올려도됨.