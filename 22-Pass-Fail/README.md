# 22 - Pass Fail

## ✅ Objective  
Check whether a student has passed or failed based on marks.  

## 💡 Concepts Used  
- Variables in JavaScript (`let`)  
- Conditional statements (`if-else`)  
- Comparison operator (`>=`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program declares a variable `marks` with the value `60`.  
- If `marks >= 50`, it prints **"Pass"**.  
- Otherwise, it prints **"Fail"**.  

```javascript
// Write a program to check pass or fail based on marks.

let marks = 60;
if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}
