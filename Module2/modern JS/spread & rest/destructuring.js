// a) Spread Operator to Merge Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); 



// b) Rest Operator: Function to Sum Numbers
const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum(1, 2, 3, 4)); 


// c) Multi-Level Object Destructuring
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

// Multi-level destructuring
const {
  name,
  address: { city, pin }
} = user;

console.log(name); 
console.log(city); 
console.log(pin);  