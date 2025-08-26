// Q21: Print full pyramid with numbers
//     1
//    222
//   33333
//  4444444
// 555555555

let n = 5;

for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let numbers = String(i).repeat(2 * i - 1);
    console.log(spaces + numbers);
}
