# 13 - Sum and Multiplication of Digits of a Number

## ✅ Objective
1. Find the **sum of digits** of a given number.  
2. Find the **multiplication of digits** of a given number.  

## 💡 Concepts Used
- Variables in JavaScript
- Modulus operator (`%`) to extract last digit
- `Math.floor()` to remove last digit
- While loop
- Arithmetic operators (`+=`, `*=`)  
- Console output (`console.log()`)

## 📘 Code Explanation
Both programs use the same logic with slight differences:  
- Take the number.  
- Extract the last digit using `n % 10`.  
- Add it to a `sum` variable for the first program.  
- Multiply it with a `star` variable for the second program.  
- Remove the last digit using `Math.floor(n / 10)`.  
- Repeat until the number becomes `0`.  

Finally, print the result.

---

### 🔹 Sum of Digits
```javascript
// to print sum of digits of a number

let n = 1234;
let sum = 0;

while (n > 0) {
    let digit = (n % 10); // to get the last digit
    sum += digit; // add the digit to sum
    n = Math.floor(n / 10); // remove the last digit
}
console.log("Sum of digits is: " + sum);
```

### 🔹 Multiplication of Digits
```javascript
// to print multiplication of digits of a number

let x = 1234;
let star = 1;

while (x > 0) {
    let digit = (x % 10); // to get the last digit (4, 3, 2, 1)
    star *= digit; // multiply the digit with star
    x = Math.floor(x / 10); // remove the last digit
}
console.log("Multiplication of digits is: " + star);
