// Write a program to find the Least Common Multiple (LCM) of two numbers.

let a = 12, b = 15;
let gcd = (x, y) => {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
};
let lcm = (a * b) / gcd(a, b);

console.log("LCM is:", lcm);
