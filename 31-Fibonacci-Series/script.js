// Write a program to print the Fibonacci series up to `n` terms.

let n = 10;
let a = 0, b = 1;

console.log("Fibonacci series:");
for (let i = 1; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
