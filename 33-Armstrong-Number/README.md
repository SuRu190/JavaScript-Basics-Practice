# 32 - Armstrong Number

## ✅ Objective  
Check whether a given number is an Armstrong number.  

## 💡 Concepts Used  
- Variables in JavaScript (`let`)  
- `while` loop for digit extraction  
- Modulus operator (`%`) to get the last digit  
- Exponentiation operator (`**`) to calculate cube of digits  
- `Math.floor()` to remove the last digit  
- Conditional statement (`if-else`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
1. A number `num = 153` is declared.  
2. A copy of the number is stored in `temp`, and `sum` is initialized to `0`.  
3. Using a `while` loop:  
   - Extract the last digit with `temp % 10`.  
   - Cube the digit and add it to `sum`.  
   - Remove the last digit using `Math.floor(temp / 10)`.  
4. After the loop ends, compare `sum` with the original number `num`.  
   - If equal, the number is an Armstrong number.  
   - Otherwise, it is not.  

- Example: `153` → `1³ + 5³ + 3³ = 153` → Armstrong number ✅  

```javascript
// Write a program to check whether a number is an Armstrong number.

let num = 153;
let temp = num;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log(num, "is an Armstrong number");
} else {
    console.log(num, "is not an Armstrong number");
}
