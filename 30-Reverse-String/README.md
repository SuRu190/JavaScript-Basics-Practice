# 29 - Reverse String

## ✅ Objective  
Write a program to reverse a given string.  

## 💡 Concepts Used  
- String in JavaScript  
- `for` loop (iterating in reverse order)  
- String concatenation (`+=`)  
- String length property (`.length`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
1. A string `str` is declared with the value `"JavaScript"`.  
2. An empty string `reversed` is initialized.  
3. A `for` loop starts from the last character of `str` (`str.length - 1`) and moves backward until index `0`.  
4. In each iteration, the current character is added to `reversed`.  
5. Finally, the reversed string is printed.  

- Original string: **JavaScript**  
- Reversed string: **tpircSavaJ**  

```javascript
// Write a program to reverse a string.

let str = "JavaScript";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log("Reversed string:", reversed);
