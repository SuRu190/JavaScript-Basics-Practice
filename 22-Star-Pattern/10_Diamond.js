// Q25: Print diamond pattern
//     *    
//    ***   
//   *****  
//  ******* 
// *********
//  ******* 
//   *****  
//    ***   
//     *

let n = 5;

// upper half
for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}

// lower half
for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}
