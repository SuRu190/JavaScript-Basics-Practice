# 07 - Check if a Number is Palindrome or Not  

## ✅ Objective  
Check whether a given number is a palindrome or not.  

## 💡 Concepts Used  
- Variables in JavaScript  
- While loop  
- Modulus operator (`%`)  
- Division with `Math.floor()`  
- Conditional statements (`if-else`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program stores a number in the variable `theNum`.  
- It reverses the number by extracting digits one by one using `%` and forming the reversed number.  
- `Math.floor()` is used to remove the last digit in each iteration.  
- Finally, the reversed number is compared with the original number.  
  - If both are the same → it is a palindrome.  
  - Otherwise → it is not a palindrome.  

```javascript
// to check if a number is palindrome or not

let theNum = 12321;
let orNum = theNum;
let rev = 0;

while (theNum > 0) {
    let digit = theNum % 10; // to get the last number
    rev = rev * 10 + digit; // reversed number
    theNum = Math.floor(theNum / 10); // to remove the last digit
}

if (orNum === rev) {
    console.log (orNum + " is a palindrome");
}
else {
    console.log(orNum + " is NOT a palindrome");
}
