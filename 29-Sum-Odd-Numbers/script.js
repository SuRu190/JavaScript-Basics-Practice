// Find the sum of all elements in an array and print only the odd numbers.

let numbers = [1, 2, 3, 4, 5, 6];

// sum of all numbers
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`Sum is ${sum}`);

// print odd numbers
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log("Odd Number: " + numbers[i]);
    } 
}
