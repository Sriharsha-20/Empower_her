//a) Arrow function: isEven(n)
const isEven = (n) => n % 2 === 0;
console.log(isEven(10)); 
console.log(isEven(7));  

// b) Convert IF–ELSE to Ternary Operator
let marks = 50;
let result = marks >= 35 ? "Pass" : "Fail";

console.log(result); // Pass

// c) Arrow Function greet(name) using Ternary
const greet = (name) => `Hello, ${name ? name : "Guest"}`;

console.log(greet("Harsha")); 
console.log(greet());         
