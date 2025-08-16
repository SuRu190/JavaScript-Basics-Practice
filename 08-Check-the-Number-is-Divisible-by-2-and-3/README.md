# 08 - Check the Number is Divisible by 2 and 3  

## ✅ Objective  
Check whether a given number is divisible by both 2 and 3.  

## 💡 Concepts Used  
- Variables in JavaScript  
- Modulus operator (`%`)  
- Logical AND operator (`&&`)  
- Conditional statements (`if-else`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program stores a number in the variable `num`.  
- It checks if the number is divisible by both `2` and `3` using `%` (modulus operator).  
- The condition `num % 2 === 0 && num % 3 === 0` ensures both conditions are true.  
  - If true → the number is divisible by both 2 and 3.  
  - Otherwise → it is not divisible by both.  

```javascript
// to check a number whether it is divisible by both 2 and 3

let num = 24;

if (num % 2 === 0 && num % 3 === 0) {
    console.log("Yes it is divisble by both 2 and 3");
}
else {
    console.log("Not divisible by 2 and 3");
}
