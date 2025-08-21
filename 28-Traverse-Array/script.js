// Traverse an array of colors using normal for loop and for...of loop. Perform push, unshift, pop, shift, and print length.

let arr = ["red", "green", "yellow", "blue", "white"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let color of arr) {
    console.log(color);
}

arr.push("black");
arr.unshift("violet");
console.log(arr);

arr.pop();
arr.shift();
console.log(arr);

console.log(arr.length);
