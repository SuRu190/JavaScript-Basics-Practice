// to print even numbers from 1 to 20

// first method = in this we practice conditions inside loops
for (let i = 1; i<= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// second method = in this we don't need to check anything - we already know it's even
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
