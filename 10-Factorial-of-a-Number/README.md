# 10 - Find Factorial of a Number  

## ✅ Objective  
Find the factorial of a given number using a loop.  

## 💡 Concepts Used  
- Variables in JavaScript  
- `for` loop  
- Multiplication operator (`*`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program initializes the number in the variable `number` and sets `fact = 1`.  
- A `for` loop runs from `1` to the value of `number`.  
- In each iteration, the current value of `i` is multiplied with `fact`.  
- This process continues until the loop ends, giving the factorial.  
- Finally, the program prints the factorial of the number.  

```javascript
// to find the factorial of a number

let number = 5;
let fact = 1;

for (let i = 1; i <= number; i++) {
    fact = fact * i;
}

console.log("factorial of: " + number + " is " + fact);
