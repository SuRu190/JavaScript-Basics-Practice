// Write a program to swap two numbers without using a third variable.

let a = 10, b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log(`After swapping: a = ${a}, b = ${b}`);
