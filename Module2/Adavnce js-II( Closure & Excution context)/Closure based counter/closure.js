function createCounter() {
  let count = 0; 

  function increment() {
    count++;
    console.log("Current count:", count);
  }

  function decrement() {
    count--;
    console.log("Current count:", count);
  }

  function getCount() {
    console.log("Current count:", count);
  }

  return {
    increment,
    decrement,
    getCount
  };
}

console.log("----single counter----")
const counter = createCounter();

counter.increment(); 
counter.increment(); 
counter.decrement(); 
counter.getCount();  

console.log("  ")
console.log("----multiple counter----")
const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment(); 
counter1.increment(); 
counter2.increment(); 
counter1.decrement(); 
counter1.getCount(); 
counter2.getCount(); 
