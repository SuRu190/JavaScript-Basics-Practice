// Write a program to print grade based on marks. Also, check if a person is an adult or minor using ternary operator.

let marks = 85;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else {
    console.log("Grade: B");
}

let age = 20;
console.log(age >= 18 ? "Adult": "Minor"); 
