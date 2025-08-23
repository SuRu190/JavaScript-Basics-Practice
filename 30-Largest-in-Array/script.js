// Write a program to find the largest element in an array.

let arr = [3, 7, 2, 9, 5];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("Largest number is:", largest);
