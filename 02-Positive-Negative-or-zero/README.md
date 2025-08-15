# 02 - Positive, Negative, or Zero

## ✅ Objective
Check whether a given number is positive, negative, or zero.

## 💡 Concepts Used
- Variables in JavaScript  
- Comparison operators (`<`, `===`, `>`)  
- Conditional statements (`if`, `else if`, `else`)  
- Console output (`console.log()`)

## 📘 Code Explanation
The program stores a number in the variable `num`.  
It then checks the number using conditional statements:  
- If `num` is less than 0, it is a **negative number**.  
- If `num` is exactly 0, it is **zero**.  
- Otherwise, it is a **positive number**.

```javascript
let num = 0;

if (num < 0) {
    console.log("It is a negative number");
} else if (num === 0) {
    console.log("It is a zero");
} else {
    console.log("It is a positive number");
}
```
