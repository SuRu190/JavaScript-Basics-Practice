# 26 - Multiplication Table

## ✅ Objective  
Print the multiplication table of 5 using a loop.  

## 💡 Concepts Used  
- `for` loop  
- Template literals (`` `string ${expression}` ``)  
- Multiplication operator (`*`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program uses a `for` loop that runs from `i = 1` to `i <= 10`.  
- In each iteration, it multiplies `5 * i`.  
- It then prints the result in a formatted string using a **template literal**.  

Example output:  
- 5 x 1 = 5
- 5 x 2 = 10
  
.....
- 5 x 10 = 50

```javascript
// Print the multiplication table of 5.

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
