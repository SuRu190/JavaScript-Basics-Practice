# 01 - Even or Odd

## Objective
Check whether a given number is even or odd.

## Concepts Used
- Variables in JavaScript
- Modulus operator (`%`)
- Conditional statements (`if-else`)
- Console output (`console.log()`)

## Code Explanation
The program stores a number in the variable `num`.  
It then checks if the number is divisible by 2 using the modulus operator `%`.  
- If the remainder is `0`, the number is even.  
- Otherwise, it is odd.

```javascript
let num = 12547852;

if (num % 2 === 0) {
    console.log("it is an even number");
} else {
    console.log("it is an odd number");
}
