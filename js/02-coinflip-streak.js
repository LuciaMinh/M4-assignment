// Declare the variable coinFlip
let coinFlip

// Create a do while loop
do {
    // Randomly gernerate number of coinFlip
    coinFlip = Math.round(Math.random())

    // Check the result of the coin flip
    if (coinFlip === 0){
        console.log('Heads')
    }
    else{console.log('Tails')

    }
}
//Set the end for the loop once the coinFlip becomes “Tails”
while (coinFlip === 0)
