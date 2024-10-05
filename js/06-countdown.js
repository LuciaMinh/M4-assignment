// Loop to prompt for a valid number
while (true) {
    number = parseInt(prompt('Enter a non-negative number to countdown from'))

    // Check if the user entered a valid number
    if (!isNaN(number) && number >= 0) {
        break; // Exit the loop if a valid number is entered
    } else {
        console.log('Please enter a valid non-negative number.')
    }
}

// Countdown loop
for (let i = number; i >= 0; i--) {
    console.log(i)
    }
