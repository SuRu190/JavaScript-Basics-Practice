// to print sum of numbers from 1 to n

let n = 10;
let sum = 0;
// first method - using loops
for (let i = 1; i <= n; i++) {  
    sum = sum + i;
}
console.log("Sum is: " + sum);


let x = 5;
let add = 0;
// second method - using formula (no loop)
add = (x * (x + 1)) / 2; 

console.log("Sum is: " + add);