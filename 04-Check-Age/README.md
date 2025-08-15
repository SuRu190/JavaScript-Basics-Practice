# 04 - Check Age

## ✅ Objective
Check whether a person is eligible to vote based on their age.

## 💡 Concepts Used
- Variables in JavaScript
- Comparison operator (`>=`)
- Conditional statements (`if-else`)
- Console output (`console.log()`)

## 📘 Code Explanation
The program stores a person's age in the variable `age`.  
It then checks if the age is **greater than or equal to 18**:  
- If yes, it prints `"You can vote"`.  
- If not, it prints `"You cannot vote"`.

```javascript
// to check the age

let age = 11;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}
