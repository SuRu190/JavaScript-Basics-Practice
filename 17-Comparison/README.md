# 17 - Comparison

## ✅ Objective  
Compare two values using equality operators (`==`, `===`) and check conditions using logical operators.  

## 💡 Concepts Used  
- Equality operator (`==`)  
- Strict equality operator (`===`)  
- Logical operators (`&&`, `||`, `!`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program declares two variables:  
- `a` as a number (`5`)  
- `b` as a string (`"5"`)  

It then performs comparisons:  
- `a == b` → checks only value (true, because `5` equals `"5"` after type conversion).  
- `a === b` → checks both value and type (false, because number `5` is not the same type as string `"5"`).  
- `a > 3 && b < 10` → uses the logical **AND** operator to check two conditions. Both are true, so the result is true.  

```javascript
// Compare two values using == and ===. Also check a condition using logical operators.

let a = 5;
let b = "5";

console.log(a == b);   // true
console.log(a === b);  // false
console.log(a > 3 && b < 10); // true
