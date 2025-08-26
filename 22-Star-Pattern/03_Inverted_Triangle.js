// Q18: Print inverted triangle of stars
// *****
//  ****
//   ***
//    **
//     *

let n = 5;

for (let i = n; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(i);
    console.log(spaces + stars);
}
