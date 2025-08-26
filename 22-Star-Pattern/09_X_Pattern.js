// Q24: Print X pattern
// *   *
//  * * 
//   *  
//  * * 
// *   *

let n = 5;

for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
        if (i === j || i + j === n + 1) {
            line += "*";
        } else {
            line += " ";
        }
    }
    console.log(line);
}
