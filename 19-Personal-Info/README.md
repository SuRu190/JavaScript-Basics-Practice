# 19 - Personal Info

## ✅ Objective  
Store and print personal details (name, age, city) using template literals.  

## 💡 Concepts Used  
- Variables in JavaScript (`let`)  
- Template literals (`` `string ${variable}` ``)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program declares three variables:  
- `name` with the value `"Suresh"`  
- `age` with the value `21`  
- `city` with the value `"Pithoragarh"`  

It then uses a **template literal** (backticks `` ` ``) with **interpolation** (`${}`) to combine and print all values in a single string.  

```javascript
// Store and print your name, age, and city using template literals.

let name = "Suresh";
let age = 21;
let city = "Pithoragarh";
console.log(`${name} ${age} ${city}`);
