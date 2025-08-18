# 12 - Reverse a Number

## ✅ Objective
Reverse the digits of a given number.

## 💡 Concepts Used
- Variables in JavaScript
- Modulus operator (`%`) to extract last digit
- `Math.floor()` to remove last digit
- While loop
- Console output (`console.log()`)

## 📘 Code Explanation
The program takes a number stored in `num` and reverses it using a loop.  
- Inside the loop, the **last digit** of the number is extracted using `num % 10`.  
- This digit is added to the reversed number by multiplying the current `reverse` value by `10` and then adding the digit.  
- The last digit is then removed from the number using `Math.floor(num / 10)`.  
- The loop continues until the number becomes `0`.  

Finally, it prints the reversed number.

```javascript
// reverse a number

let num = 4321;
let reverse = 0;

while (num > 0) {
    let digit = num % 10; // to get the last digit
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reversed number is: " + reverse);
