/**
 * Basic Type
 */

// string
let car = "Toyota";
let bike: string;
bike = "Winner";
// bike = 150 Loi ngay

// number
let num: number = 10;

// boolean
let isLoading: boolean = false;

// undefined
// let body = undefined

// null
let footer: null;

// any
// let person: any
// person = 10
// person = 'Something'
// person = false

/**
 * Object
 */

/*
let house = {}
house.address = 'Da Nang'
*/
/**
 * ERROR: property 'address' does not exist on type '{}'
 * phải quy định rõ house có propety 'address'
 */

let house: {
  address: string;
  color?: string; //không cần phải khởi tạo giá trị mặc định như address
} = {
  address: "",
};
house.address = "Da Nang";

/**
 * Array
 */

/**
 * để ràng buộc kiểu data của 1 array, phải khai báo kiểu data trước []
 * nếu không khai báo kiểu data trước array, thì array có kiểu là never
 * không thể push data vào array kiểu never được
 */
/**
 * category có kiểu là never[]
 */
// let category = [];
// category.push(1);

let products: any[] = [];
products.push(1);
products.push("VietNam");

// string[]
let names = ["Alex", "Ben"];
let addresses: string[] = [];
addresses.push("Da Nang");

// number[]
let numbers: number[] = [];
numbers = [1, 2, 3];

// object array
let people: {
  name: string;
  age: number;
}[] = [];
people.push({
  name: "Ducky",
  age: 27,
});

/**
 * Function
 */

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

sum(1, 2);

const sub: (num1: number, num2: number) => number = (
  num1: number,
  num2: number
) => num1 - num2;

const handle = () => {
  console.log(123);
};

/**
 * Union
 */

let price: string | number | boolean;
price = "10";
price = 20;
price = false;

let body: { name: string | number } | { firstName: string } = {
  name: 100,
};

/**
 * Enum
 */

enum Sizes {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

let size = Sizes.S;

/**
 * Interface
 * 2 interface trùng tên sẽ merge vào nhau
 */

interface State {
  name: string;
  isLoading: boolean;
}

interface State {
  age: number;
}

let state: State = {
  name: "Dang",
  isLoading: false,
  age: 100,
};

interface FullName {
  name: string;
}

interface Age {
  age: number;
}

//interface Person = FullName | Age

/**
 * Type
 */

// type State = {
//   name: string
//   isLoading: boolean
// }

// let state: State = {
//   name: 'Dang',
//   isLoading: false
// }

// type Name = {
//   name: string
// }

// type Age = {
//   age: number
// }

// type Person = Name | Age

// Mình thích dùng type hơn

const handleClick = <Type>(value: Type) => value;

let value = 100;
handleClick<string>("100");

/**
 * Class
 */

class Person1 {
  private name: string;
  age: number;
  readonly money: number = 40;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  handle() {
    let value = this.money;
  }
}

const alex = new Person1("Alex", 27);
/*
alex.money = 200

class Person {
  public name: string
  public age: number

  constructor(name: string, age: number) {
    this.age = age
    this.name = name
  }
}

class Person {
  constructor(public name: string, public age: number) {}
}
*/
