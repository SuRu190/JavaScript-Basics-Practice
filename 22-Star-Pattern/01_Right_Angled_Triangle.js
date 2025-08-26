// Q16: Print right-aligned right-angled triangle of stars
//     *  
//    **
//   ***
//  ****
// *****

let n = 5;

for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(i);
    console.log(spaces + stars);
}
