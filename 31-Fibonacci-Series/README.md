# 31 - Fibonacci Series

## ✅ Objective  
Print the Fibonacci series up to `n` terms.  

## 💡 Concepts Used  
- Variables in JavaScript (`let`)  
- `for` loop for iteration  
- Arithmetic operators (`+`, `=`)  
- Fibonacci sequence logic (sum of previous two numbers)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
1. A variable `n` is declared with the value `10` (number of terms).  
2. Two variables `a = 0` and `b = 1` are initialized as the first two terms of the Fibonacci series.  
3. A `for` loop runs from `1` to `n`.  
   - Prints the current value of `a`.  
   - Calculates the next term as `next = a + b`.  
   - Updates values: `a = b` and `b = next`.  
4. The series continues until all `n` terms are printed.  

- First 10 terms: **0, 1, 1, 2, 3, 5, 8, 13, 21, 34**  

```javascript
// Write a program to print the Fibonacci series up to `n` terms.

let n = 10;
let a = 0, b = 1;

console.log("Fibonacci series:");
for (let i = 1; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
