// to check if a number is palindrome or not

let theNum = 12321;
let orNum = theNum;
let rev = 0;

while (theNum > 0) {
    let digit = theNum % 10; // to get the last number
    rev = rev * 10 + digit; // reversed number
    theNum = Math.floor(theNum / 10); // to remove the last digit
}

if (orNum === rev) {
    console.log (orNum + " is a palindrome");
}
else {
    console.log(orNum + " is NOT a palindrome");
}
