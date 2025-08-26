// Q20: Print number pyramid (right aligned)
//     1
//    22
//   333
//  4444
// 55555

let n = 5;

for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let numbers = String(i).repeat(i);
    console.log(spaces + numbers);
}
