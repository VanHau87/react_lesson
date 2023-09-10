/**
 * Destructuring
 */

// Destructuring với object

/**
 * có cách để truy cập đến các properties
 */

/**
 * Cách 1: khá dài dòng
 */
const user = {
  name: "Tui nè",
  age: 34,
  sex: "male",
};

const name = user.name;
const age = user.age;
const sex = user.sex;
console.log(name, age, sex);
/**
 * Cách 2: dùng destructuring
 */
const employee = {
  fullname: "Nhu Pham",
  dept: "Sale Co-ordinator",
  address: "Mỹ Nhơn",
};
const { fullname, dept: department, address } = employee;
//thay đổi biến dept ==> department
console.log(fullname, department, address);

// Destructuring với array

const list = [
  1,
  function (a, b) {
    return a + b;
  },
];

const [value, sum] = list;

console.log(sum(2, 3));

/**
 * Spread Syntax
 */

const student = {
  name: "Hoành hành bá đạo",
  hobbies: ["coding", "eating", "drinking"],
};

// shallow copy (copy nông) ==> copy 1 level
const cloneStudent = { ...student };
//đây là 2 object khác nhau
console.log(cloneStudent === student);
//tuy nhiên không copy giá trị của thuộc tính có type là object, chỉ tham chiếu
//nên 2 hobbies cùng là 1
console.log(cloneStudent.hobbies === student.hobbies);

/**
 * Rest Parameter
 */

const handleArray = (a, b, ...c) => {
  return c;
};

const restArray = handleArray(1, 2, 3, 4, 5, 6);

console.log(restArray);

const handleObject = ({ a, b, ...c }) => {
  return c;
};

const restObject = handleObject({ a: 1, b: 2, c: 3, d: 4, e: 5 });

console.log(restObject);
