const squareCube = (N) => ({
    square : N * N,
    cube : N * N * N
});
console.log(squareCube(6));   

const inputNumber = 9;
const output = squareCube(inputNumber);
console.log(`Input: ${inputNumber}`);
console.log(`output: `, output);
