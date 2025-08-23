# 34 - Greatest Common Divisor (GCD)

## ✅ Objective  
Find the Greatest Common Divisor (GCD) of two numbers using the Euclidean Algorithm.  

## 💡 Concepts Used  
- Variables in JavaScript (`let`)  
- While loop (`while`)  
- Modulus operator (`%`)  
- Temporary variable for swapping values  
- Console output (`console.log()`)  

## 📘 Code Explanation  
1. Start with two numbers: `a = 36`, `b = 60`.  
2. The **Euclidean Algorithm** is applied:  
   - Repeat the process until `b` becomes `0`.  
   - Store `b` in `temp`.  
   - Update `b = a % b`.  
   - Update `a = temp`.  
3. When `b` becomes `0`, the current value of `a` is the **GCD**.  
4. Print the result using `console.log()`.  

- Example:  
  - `a = 36`, `b = 60`  
  - GCD is **12** ✅  

```javascript
// Write a program to find the Greatest Common Divisor (GCD) of two numbers.

let a = 36, b = 60;

while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
console.log("GCD is:", a);
