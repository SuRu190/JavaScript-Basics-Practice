# 21 - Age Calculator

## ✅ Objective  
Calculate a person’s age from their birth year.  

## 💡 Concepts Used  
- Variables in JavaScript (`let`)  
- `Date` object in JavaScript (`new Date().getFullYear()`)  
- Arithmetic operator (`-`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program declares a variable `birthYear` with the value `2003`.  
It then gets the **current year** using `new Date().getFullYear()`.  
Finally, it subtracts `birthYear` from `currentYear` to calculate the age and prints it to the console.  

```javascript
// Write a program to calculate age from birth year.

let birthYear = 2003;
let currentYear = new Date().getFullYear();
console.log(currentYear - birthYear);
