# 20 - Calculator Function

## ✅ Objective  
Create functions to perform basic arithmetic operations: addition, subtraction, multiplication, and modulus.  

## 💡 Concepts Used  
- Functions in JavaScript (`function` keyword)  
- Function parameters and return values  
- Arithmetic operators (`+`, `-`, `*`, `%`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program defines four separate functions:  
- `add(x, y)` → returns the sum of `x` and `y`  
- `subtract(x, y)` → returns the difference of `x` and `y`  
- `multiply(x, y)` → returns the product of `x` and `y`  
- `modulus(x, y)` → returns the remainder when `x` is divided by `y`  

Each function is called with the values `10` and `3`, and the results are printed to the console.  

```javascript
// Create functions for addition, subtraction, multiplication, and modulus of two numbers.

function add(x, y) {
    return x + y;
}
console.log(add(10, 3));

function subtract(x, y) {
    return x - y;
}
console.log(subtract(10, 3));

function multiply(x, y) {
    return x * y;
}
console.log(multiply(10, 3));

function modulus(x, y) {
    return x % y;
}
console.log(modulus(10, 3));
