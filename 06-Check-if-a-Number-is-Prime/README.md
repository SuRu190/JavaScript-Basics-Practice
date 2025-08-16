# 06 - Check if a Number is Prime

## ✅ Objective
Check whether a given number is prime or not.

## 💡 Concepts Used
- Variables in JavaScript
- Conditional statements (`if-else`)
- Loops (`for`)
- Modulus operator (`%`)
- Boolean flag (`true` / `false`)
- Console output (`console.log()`)

## 📘 Code Explanation
The program stores a number in the variable `num`.  
- If the number is less than or equal to 1, it is **not prime**.  
- Otherwise, the program loops from `2` to `num - 1` to check divisibility.  
- If the number is divisible by any value in this range, it sets `isPrime` to `false` and breaks the loop.  
- Finally, based on the value of `isPrime`, it prints whether the number is prime or not.

```javascript
// To check the number is PRIME or not

let num = 87;
let isPrime = true;

if (num <= 1) {
  console.log(num + " is NOT a prime number");
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num + " is a prime number");
  } else {
    console.log(num + " is NOT a prime number");
  }
}
