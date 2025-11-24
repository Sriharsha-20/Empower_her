const username = "Harsha";
const course = "Java Script";

console.log(`Hello ${username}, welcome to the ${course}!`);

const name = "Sri";
const age = 22;

const student = {
    name,
    age,
    greet() {
        console.log("Hello");
    }
};

console.log(student);
student.greet();

const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("Sunka", "Sriharsha"));
