# 33 - Swap Two Numbers

## ✅ Objective  
Swap two numbers without using a third variable.  

## 💡 Concepts Used  
- Variables in JavaScript (`let`)  
- Arithmetic operations (`+`, `-`)  
- Assignment operator (`=`)  
- Template literals (`` `${}` ``) for output  

## 📘 Code Explanation  
1. Two numbers `a = 10` and `b = 20` are initialized.  
2. Swap process without a third variable:  
   - `a = a + b;` → Now `a` becomes the sum of both numbers.  
   - `b = a - b;` → Subtracting original `b` from the sum gives the original `a`.  
   - `a = a - b;` → Subtracting new `b` from the sum gives the original `b`.  
3. After swapping:  
   - `a` now holds the original `b`.  
   - `b` now holds the original `a`.  
4. The result is printed using `console.log()`.  

- Example: `a = 10`, `b = 20` → After swapping → `a = 20`, `b = 10` ✅  

```javascript
// Write a program to swap two numbers without using a third variable.

let a = 10, b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log(`After swapping: a = ${a}, b = ${b}`);
