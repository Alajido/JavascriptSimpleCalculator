// const locations = [2, 3, 4];
const location_1 = 2;
const location_2 = 3;
const location_3 = 4;
let guess;
const hit = 0;
const numberOfGuess = 0;
const isSunk = false;

 while (isSunk == false){
    guess = parseInt(prompt('Enter To Attempt from 0 - 6 '))

    if (guess < 0){
        alert('Invalid Attempt!')
    } else if (guess > 6){
        alert('Invalid Attempt!')
    } else {
        numberOfGuess = numberOfGuess + 1;
        // console.log(numberOfGuess)

        if (guess == location_1 || guess == location_2 || guess == location_3){
             hit = hit + 1;

            if (hit == 3){
                isSunk = true;
                alert("you're done")
            }
        }
    }
}

// while (isSunk == false) {
//     guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
//     if (guess < 0 || guess > 6) {
//     alert("Please enter a valid cell number!");
//     } else {
//         numberOfGuess = numberOfGuess + 1;
//     if (guess == location_1 || guess == location_2 || guess == location_3) {
//     hit = hit + 1;
//     if (hit == 3) {
//     isSunk = true;
//     alert("You sank my battleship!");
//     }
//     }
//     }
//     }