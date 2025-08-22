# 18 - Grading and Ternary

## ✅ Objective  
Print grade based on marks using conditional statements, and check if a person is an adult or minor using the ternary operator.  

## 💡 Concepts Used  
- Conditional statements (`if`, `else if`, `else`)  
- Ternary operator (`condition ? value1 : value2`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program first declares a variable `marks` with a value of `85`.  
- If `marks >= 90`, it prints **Grade: A+**.  
- Else if `marks >= 75`, it prints **Grade: A**.  
- Otherwise, it prints **Grade: B**.  

Then, it checks whether `age` is `>= 18` using the **ternary operator**:  
- If true, it prints **"Adult"**.  
- Otherwise, it prints **"Minor"**.  

```javascript
// Write a program to print grade based on marks. Also, check if a person is an adult or minor using ternary operator.

let marks = 85;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else {
    console.log("Grade: B");
}

let age = 20;
console.log(age >= 18 ? "Adult": "Minor");
