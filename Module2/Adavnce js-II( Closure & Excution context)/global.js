let age = 22;

function displayAge() {
  console.log("Age inside displayAge():", age);
}

function changeAge() {
  age = 23; 
  console.log("Age updated inside changeAge():", age);
}

displayAge();   
changeAge();   
displayAge();  