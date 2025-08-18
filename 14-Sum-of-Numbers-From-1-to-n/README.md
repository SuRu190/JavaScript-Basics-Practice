# 14 - Sum of Numbers From 1 to n

## ✅ Objective
Find the sum of all numbers from **1 to n** using two different methods:
1. **Loop method**
2. **Mathematical formula**

## 💡 Concepts Used
- Variables in JavaScript
- Loops (`for`)
- Arithmetic operators (`+`, `*`, `/`)
- Console output (`console.log()`)

## 📘 Code Explanation
### 🔹 Method 1 - Using Loop
- Start with `sum = 0`.
- Run a loop from `1` to `n`.
- Keep adding each number to `sum`.
- Print the result.

```javascript
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {  
    sum = sum + i;
}
console.log("Sum is: " + sum);
```

### 🔹 Method 2 - Using Formula
- Use the direct formula (𝑛×(𝑛+1))/2
- No need to use a loop

```javascript
let x = 5;
let add = 0;
add = (x * (x + 1)) / 2; 
console.log("Sum is: " + add);

