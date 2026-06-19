/* common js */
// const moudleData = require("./math");
// console.log(moudleData.add(1,2));
// console.log(moudleData.sub(1,2));
// const {add , sub} = require("./math");
// console.log(add(1,2));
// console.log(sub(1,2));

/* ESM */
import mul, {add, sub} from "./math.js"; // 확장자를 붙여줘야 함

console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(2,3));