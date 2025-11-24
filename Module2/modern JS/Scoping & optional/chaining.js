// 
// a) Scoping with let vs var
if (true) {
  let x = 10;
  var y = 20;
}

console.log(y); // 20
console.log(x); // ReferenceError: x is not defined


// b) Optional Chaining Example
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email); 
console.log(profile?.user?.details?.phone); 


// c) Optional Chaining Prevents Error

const data = {
  product: {
    name: "Laptop"
  }
};

console.log(data.product?.specs?.ram); // undefined 
