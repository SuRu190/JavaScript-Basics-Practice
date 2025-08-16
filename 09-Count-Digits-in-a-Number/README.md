# 09 - Count Digits in a Number  

## ✅ Objective  
Count the total number of digits in a given number.  

## 💡 Concepts Used  
- Variables in JavaScript  
- While loop  
- Division operator (`/`)  
- Math function (`Math.floor()`)  
- Counter variable  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program stores a number in the variable `number`.  
- A counter variable `count` is initialized with `0`.  
- Inside the `while` loop:  
  - The last digit is removed using `Math.floor(number / 10)`.  
  - The `count` is incremented in each iteration.  
- The loop continues until the number becomes `0`.  
- Finally, the total count of digits is printed.  

```javascript
// we have to count digits in a number

let number = 123465;
let count = 0;

while (number > 0) {
  number = Math.floor(number / 10);
  count++;
}

console.log("Total digits are: " + count);
