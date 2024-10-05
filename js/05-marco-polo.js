// A loop from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if number multiples of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Marco! Polo!")
    }
    // Check if numer multiples of 3
    else if (i % 3 === 0) {
        console.log("Marco!")
    }
    // Check if number multiples of 5
    else if (i % 5 === 0) {
        console.log("Polo!")
    }
    // If none of the above, print the number
    else {
        console.log(i)
    }
}