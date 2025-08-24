// we have to count digits in a number

let number = 123465;
let count = 0;

while (number > 0) {
  number = Math.floor(number / 10);
  count++;
}

console.log("Total digits are: " + count);
