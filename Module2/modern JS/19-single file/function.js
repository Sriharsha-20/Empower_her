// 1. Template Literals + Expressions

// 1.a) Print "5 + 7 = 12" using template literal
const x = 5, y = 7;
console.log(`1.a) ${x} + ${y} = ${x + y}`);

// 1.b) 3-line multi-line template literal
const multi = `
HTML
CSS
Java Script
`;
console.log("1.b)", multi);

// 1.c) Print full name
const firstName = "Sunka";
const lastName = "Sriharsha";
console.log(`1.c) Full Name: ${firstName} ${lastName}`);


// 2. Arrow Functions & this

// 2.a) Convert to arrow function
const square = n => n * n;
console.log("2.a) square(4):", square(4));

// 2.b) Why undefined?
// Because arrow functions do NOT bind the "this"
const obj1 = {
  value: 50,
  test: () => console.log("2.b)", this.value) // undefined
};
obj1.test();

// 2.c) Normal function version
const obj2 = {
  value: 50,
  test() {
    console.log("2.c)", this.value);
  }
};
obj2.test();

// 3. Rest, Spread & Copying Objects

// 3.a) Shallow copy using spread
const product = { name: "Pen", price: 10 };
const newProduct = { ...product };
console.log("3.a)", newProduct);

// 3.b) Merge objects
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log("3.b)", merged);

// 3.c) maxValue(...nums)
const maxValue = (...nums) => Math.max(...nums);
console.log("3.c)", maxValue(5, 40, 100, 8));


// 4. Destructuring & Optional Chaining

// 4.a) Extract a and b
const arr = [10, 20, 30];
const [v1, v2] = arr;
console.log("4.a)", v1, v2);

// 4.b) Extract brand
const laptop = { brand: "Dell", ram: "8GB" };
const { brand, ram } = laptop;
console.log("4.b)", brand, ram);

// 4.c) Optional chaining
const info = {};
console.log("4.c)", info?.details?.age); // undefined


// 5. Scoping (let / var / const)

// 5.a) var loop
for (var i = 0; i < 3; i++) {}
console.log("5.a)", i);

// 5.b) let loop 
console.log("5.b) ERROR because let is block scoped");

// 5.c) Why const?
console.log("5.c) const prevents reassignment and protects values");


// 6. Ternary Operator Practice

// 6.a)
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log("6.a)", speed);

// 6.b)
let age = 15;
let statusAge = age >= 18 ? "Adult" : "Minor";
console.log("6.b)", statusAge);

// 6.c)
const checkNum = n => n > 0 ? "Positive" : n === 0 ? "Zero" : "Negative";
console.log("6.c)", checkNum(10), checkNum(0), checkNum(-5));


// 7. Spread, Rest & Arrays

// 7.a) Add elements 4, 5
const nums = [1, 2, 3];
const updatedNums = [...nums, 4, 5];
console.log("7.a)", updatedNums);

// 7.b) Combine arrays
const A = ["x", "y"];
const B = ["z"];
const combined = [...A, ...B];
console.log("7.b)", combined);

// 7.c) Rest function
const printNames = (...names) => names;
console.log("7.c)", printNames("A", "B", "C"));


// 8. Object Destructuring & Shorthand

// 8.a)
const userSample = { id: 101, status: "active" };
const { id, status } = userSample;
console.log("8.a)", id, status);

// 8.b) Shorthand
const id2 = 101;
const role = "admin";
const userShort = { id2, role };
console.log("8.b)", userShort);

// 8.c) Object with method shorthand
const account = {
  uid: 500,
  type: "moderator",
  greet() {
    return `Hello - UID ${this.uid}`;
  }
};
console.log("8.c)", account.greet());


// 9. Template Literals (More Practice)

// 9.a)
console.log(`9.a) Today's Date = ${new Date().toDateString()}`);

// 9.b)
const scoreMessage = (name, score) =>
  `Hello ${name}, your score is ${score}/100`;
console.log("9.b)", scoreMessage("Harsha", 95));


// 10. Arrow Function Shorthands

// 10.a)
const add = (p, q) => p + q;
console.log("10.a)", add(2, 5));

// 10.b)
const isAdult = age => age >= 18;
console.log("10.b)", isAdult(21));

// 10.c)
const double = n => n * 2;
console.log("10.c)", double(10));

// 11. Spread Operator (Arrays & Objects)

// 11.a) Clone array
const original = [10, 20, 30];
const clone = [...original];
console.log("11.a)", clone);

// 11.b) Add 100 at beginning
const newArr = [100, ...original];
console.log("11.b)", newArr);

// 11.c) Merge objects and override
const objA = { a: 1, b: 2 };
const objB = { b: 99, c: 3 };
const finalObj = { ...objA, ...objB };
console.log("11.c)", finalObj);


// 12. Optional Chaining (More Practice)

// 12.a)
const userA = {
  name: "Alex",
  address: { city: "Bangalore" }
};
console.log("12.a)", userA?.address?.city);

// 12.b)
const userB = { name: "Ravi" }; 
console.log("12.b)", userB?.job?.title); 

//12.c
const user = {
  profile: null
};

console.log("12.c)",user.profile?.name);
