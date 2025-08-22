# 35 - Least Common Multiple (LCM)

## ✅ Objective  
Find the Least Common Multiple (LCM) of two numbers using the relationship between **GCD** and **LCM**.  

## 💡 Concepts Used  
- Variables in JavaScript (`let`)  
- Functions and Arrow Function (`gcd = (x, y) => {}`)  
- While loop (`while`)  
- Modulus operator (`%`)  
- Mathematical formula:  
  \[
  LCM(a, b) = \frac{a \times b}{GCD(a, b)}
  \]  
- Console output (`console.log()`)  

## 📘 Code Explanation  
1. Two numbers are taken: `a = 12`, `b = 15`.  
2. A helper function `gcd(x, y)` is defined using the **Euclidean Algorithm** to calculate GCD.  
3. LCM is calculated using the formula:  
   \[
   LCM = (a times b) / GCD(a, b)
   \]  
4. Print the LCM using `console.log()`.  

- Example:  
  - `a = 12`, `b = 15`  
  - GCD = **3**  
  - LCM = **60** ✅  

```javascript
// Write a program to find the Least Common Multiple (LCM) of two numbers.

let a = 12, b = 15;
let gcd = (x, y) => {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
};
let lcm = (a * b) / gcd(a, b);

console.log("LCM is:", lcm);
