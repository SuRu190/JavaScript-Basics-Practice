// Q22: Print palindrome number pyramid
//     1
//    121
//   12321
//  1234321
// 123454321

let n = 5;

for (let i = 1; i <= n; i++) {
    let line = " ".repeat(n - i);

    // increasing numbers
    for (let j = 1; j <= i; j++) {
        line += j;
    }

    // decreasing numbers
    for (let j = i - 1; j >= 1; j--) {
        line += j;
    }

    console.log(line);
}
