// reverse a number
let num = 4321;
let reverse = 0;

while (num > 0) {
    let digit = num % 10; // to get the last digit
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reversed number is: " + reverse);