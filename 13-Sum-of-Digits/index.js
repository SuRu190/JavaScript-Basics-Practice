// to print sum of digits of a number

let n = 1234;
let sum = 0;

while (n > 0) {
    let digit = (n % 10); // to get the last digit
    sum += digit; // add the digit to star
    n = Math.floor(n / 10); // remove the last digit
}

console.log("Sum of digits is: " + sum);




// to print multiplication of digits of a number

let x = 1234;
let star = 1;

while (x > 0) {
    let digit = (x % 10); // to get the last digit (4, 3, 2, 1)
    star *= digit; // multiply the digit to star
    x = Math.floor(x / 10); // remove the last digit
}

console.log("Multiplication of digits is: " + star);
