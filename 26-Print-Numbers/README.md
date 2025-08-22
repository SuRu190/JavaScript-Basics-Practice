# 25 - Print Numbers

## ✅ Objective  
Print numbers from 1 to 10 using `for` and `while` loops.  

## 💡 Concepts Used  
- `for` loop  
- `while` loop  
- Increment operator (`++`)  
- Console output (`console.log()`)  

## 📘 Code Explanation  
The program demonstrates two different loop structures:  

1. **For Loop**  
   - Starts with `i = 1`  
   - Runs until `i <= 10`  
   - Prints numbers from 1 to 10  

2. **While Loop**  
   - Starts with `j = 1`  
   - Continues while `j <= 10`  
   - Increments `j` in each iteration  
   - Prints numbers from 1 to 10  

```javascript
// Print numbers from 1 to 10 using for and while loops.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}
