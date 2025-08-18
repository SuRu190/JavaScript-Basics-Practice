# 15 - Table of a Number

## ✅ Objective
Take a number as input from the user and display its multiplication table from **1 to 10**.

## 💡 Concepts Used
- **HTML & JavaScript Integration** (using `<script>` tag)
- **User Input** using `prompt()`
- **Loops** (`for`)
- **String concatenation** (`+`)
- **Console Output** (`console.log()`)

## 📘 Code Explanation
### 🔹 HTML (index.html)
Basic HTML structure to include the JavaScript file:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplication | JavaScript</title>
</head>
<body>
    <h1>Multiplication | JavaScript</h1>
    <script src="index.js"></script>
</body>
</html>
```

### 🔹 JAVASCRIPT (script.js)
- Ask the user to enter a number using prompt().
- Use a for loop to print the multiplication table from 1 to 10.
- Display the results in the console.
```javascript
let number = prompt("Enter the number:");

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i)); 
}
