# 30 - Largest in Array

## ✅ Objective  
Find the largest element in an array using a loop.  

## 💡 Concepts Used  
- Arrays in JavaScript (`[]`)  
- Variables (`let`)  
- `for` loop for iteration  
- Conditional statement (`if`)  
- Comparison operator (`>`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
1. An array `arr` is declared with values `[3, 7, 2, 9, 5]`.  
2. A variable `largest` is initialized with the first element (`arr[0]`).  
3. A `for` loop starts from the second element (`i = 1`) and checks each value.  
   - If the current element is greater than `largest`, update `largest` with that value.  
4. After the loop ends, the largest number is printed.  

- Array: `[3, 7, 2, 9, 5]`  
- Largest number: **9**  

```javascript
// Write a program to find the largest element in an array.

let arr = [3, 7, 2, 9, 5];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("Largest number is:", largest);
