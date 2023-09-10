# ES6 Module

## Export

```js
// có thể suất giá trị từng cái một
// module1.js
export const variableA = "Biến A";
export function sayHello() {
    console.log("Hello);
}
```

```js
//có thể export cùng lúc nhiều đối tượng
// module1.js
const variableA = "Biến A";
function sayHello() {
    console.log("Hello);
}
export {variableA, sayHello};
```

## Import

```js
//import từng đối tượng
import { variableA, sayHello } from "./module1.js";
//import tất cả và nhập vào 1 đối tượng là Module1
import * as Module1 from "./module1.js";
```

## Export default

```js
//mỗi module chỉ có thể có 1 export default
// module2.js
export default function () {
  return "This is the main functionality of this module.";
}
//import default không cần dùng dấu {}, không cần đúng tên
import mainFunction from "./module2.js";
//lưu ý: có thể export default cùng lúc khi khai báo hàm
export default function sayHello() {
    return "Hello, ChatGPT!";
}
//không thể làm vậy với biến, phải tách ra
const greeting = "Hello, ChatGPT!";
export default greeting;
```
