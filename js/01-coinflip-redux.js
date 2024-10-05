// Declare the variable coinFlip
let coinFlip

// Prompt the user for the number of flips
let numberOfFlips = prompt ('How many times would you like to flip the coin?')

// Create the loop follow the number of flips
for (let i = 0; i < numberOfFlips; i++){
    // Randomly gernerate number of coinFlip
    coinFlip = Math.round(Math.random())
    // Check the result of the coin flip
    if (coinFlip === 0){
        console.log('Heads')
    }
    else{console.log('Tails')

    }

}
