# 05 - Check if a Character is Vowel or Consonant

## ✅ Objective
Determine whether a given character is a vowel or a consonant.

## 💡 Concepts Used
- Variables in JavaScript
- Logical OR operator (`||`)
- Comparison operator (`===`)
- Conditional statements (`if-else`)
- Console output (`console.log()`)

## 📘 Code Explanation
The program stores a single character in the variable `alphabet`.  
It then checks if the character matches any of the five lowercase vowels: `a`, `e`, `i`, `o`, `u`.  
- If it matches, it prints `"It is a vowel"`.  
- Otherwise, it prints `"It is a consonant"`.

```javascript
// to check if a character is vowel or consonant

let alphabet = "s";

if (alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "u") {
    console.log("It is a vowel");
} else {
    console.log("It is a consonant");
}
