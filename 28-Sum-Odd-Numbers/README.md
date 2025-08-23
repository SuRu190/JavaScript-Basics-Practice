# 28 - Sum Odd Numbers

## ✅ Objective  
Find the sum of all elements in an array and print only the odd numbers.  

## 💡 Concepts Used  
- Arrays in JavaScript (`[]`)  
- `for` loop for iteration  
- Arithmetic operators (`+`, `%`)  
- Conditional statement (`if`)  
- Template literals and string concatenation  
- Console output (`console.log()`)  

## 📘 Code Explanation  
1. An array `numbers` is declared with values `[1, 2, 3, 4, 5, 6]`.  
2. A variable `sum` is initialized with `0`.  
   - Using a `for` loop, each element is added to `sum`.  
   - Finally, the total sum is printed.  
   - Output: **Sum is 21**  
3. Another `for` loop iterates through the array.  
   - If the current element is odd (`numbers[i] % 2 !== 0`), it is printed as an odd number.  
   - Output: `1, 3, 5`  

```javascript
// Find the sum of all elements in an array and print only the odd numbers.

let numbers = [1, 2, 3, 4, 5, 6];

// sum of all numbers
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`Sum is ${sum}`);

// print odd numbers
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log("Odd Number: " + numbers[i]);
    } 
}
