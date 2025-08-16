// To check the number is PRIME or not

let num = 87;
let isPrime = true;

if (num <= 1) {
  console.log(num + " is NOT a prime number");
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num + " is a prime number");
  } else {
    console.log(num + " is NOT a prime number");
  }
}
