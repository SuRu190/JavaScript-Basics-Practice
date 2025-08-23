# 23 - Basic Loops

## ✅ Objective  
Print numbers from 1 to 5 using different types of loops (`for`, `while`, `do-while`).  

## 💡 Concepts Used  
- `for` loop  
- `while` loop  
- `do-while` loop  
- Increment operator (`++`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program demonstrates three types of loops in JavaScript:  

1. **For Loop**  
   - Runs from `i = 1` to `i <= 5`  
   - Prints numbers 1 to 5  

2. **While Loop**  
   - Starts with `j = 1`  
   - Continues until `j <= 5`  
   - Increments `j` after each iteration  

3. **Do-While Loop**  
   - Starts with `k = 1`  
   - Executes the loop body at least once  
   - Runs until `k <= 5`  

```javascript
// Print numbers from 1 to 5 using for, while, and do-while loops.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
