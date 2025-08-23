# 27 - Traverse Array

## ✅ Objective  
Traverse an array of colors using different loops and perform array operations like `push`, `unshift`, `pop`, `shift`, and print the length of the array.  

## 💡 Concepts Used  
- Arrays in JavaScript (`[]`)  
- Normal `for` loop  
- `for...of` loop  
- Array methods:  
  - `push()` → add element at end  
  - `unshift()` → add element at beginning  
  - `pop()` → remove last element  
  - `shift()` → remove first element  
- `length` property of an array  
- Console output (`console.log()`)  

## 📘 Code Explanation  
1. An array `arr` is declared with colors: `["red", "green", "yellow", "blue", "white"]`.  
2. **Normal for loop** is used to traverse the array by index and print each color.  
3. **for...of loop** is used to traverse directly through values of the array.  
4. Array operations are performed:  
   - `arr.push("black")` → adds `"black"` at the end.  
   - `arr.unshift("violet")` → adds `"violet"` at the beginning.  
   - `arr.pop()` → removes the last element.  
   - `arr.shift()` → removes the first element.  
5. Finally, `arr.length` prints the total number of elements in the array.  

```javascript
// Traverse an array of colors using normal for loop and for...of loop. 
// Perform push, unshift, pop, shift, and print length.

let arr = ["red", "green", "yellow", "blue", "white"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let color of arr) {
    console.log(color);
}

arr.push("black");
arr.unshift("violet");
console.log(arr);

arr.pop();
arr.shift();
console.log(arr);

console.log(arr.length);
