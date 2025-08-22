# 24 - Array Push Pop

## ✅ Objective  
Perform different array operations (`push`, `pop`, `shift`, `unshift`) on a list of fruits.  

## 💡 Concepts Used  
- Arrays in JavaScript (`[]`)  
- `push()` → adds an element to the end  
- `pop()` → removes the last element  
- `unshift()` → adds an element to the beginning  
- `shift()` → removes the first element  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program starts with an array of fruits: `["apple", "banana", "orange"]`.  

1. `fruits.push("mango")` → adds `"mango"` at the end.  
2. `fruits.unshift("grape")` → adds `"grape"` at the beginning.  
   - Array becomes: `["grape", "apple", "banana", "orange", "mango"]`  

Then, removal operations are performed:  
3. `fruits.pop()` → removes the last element (`"mango"`).  
4. `fruits.shift()` → removes the first element (`"grape"`).  
   - Final array: `["apple", "banana", "orange"]`  

```javascript
// Perform push, pop, shift, and unshift operations on an array of fruits.

let fruits = ["apple", "banana", "orange"];
fruits.push("mango"); 
fruits.unshift("grape"); 
console.log(fruits);

fruits.pop(); 
fruits.shift(); 
console.log(fruits);
