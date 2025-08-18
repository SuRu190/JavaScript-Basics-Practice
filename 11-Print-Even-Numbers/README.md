# 11 - Print Even Numbers

## ✅ Objective
Print all even numbers from 1 to 20 using two different loop methods.

## 💡 Concepts Used
- Loops (`for` loop)
- Conditional statement (`if`)
- Arithmetic operator (`%` modulus)
- Increment by steps (`i += 2`)
- Console output (`console.log()`)

## 📘 Code Explanation
This task demonstrates two ways to print even numbers between 1 and 20:

1. **Using condition inside loop**  
   - Loop runs from `1` to `20`.  
   - Inside the loop, the condition `i % 2 === 0` checks whether the number is even.  
   - If true, it prints the number.

2. **Skipping odd numbers directly**  
   - Start the loop at `2` and increment by `2` (`i += 2`).  
   - Since we only touch even numbers, no condition check is required.  
   - It directly prints all even numbers.

```javascript
// first method = in this we practice conditions inside loops
for (let i = 1; i<= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// second method
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
