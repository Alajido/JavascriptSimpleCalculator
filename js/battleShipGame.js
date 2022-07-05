// const locations = [2, 3, 4];
var location_1 = 2;
var location_2 = 3;
var location_3 = 4;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

// while (isSunk == false){
//     guess = prompt('enter a number ');

//     if (guess < 0 || guess > 6){
//         alert('enter a valid number');
//     } else{
//         numberOfGuess = numberOfGuess + 1;

//         if (guess == location_1 || guess == location_2 || guess == location_3){
//             alert('hit');
//             hit = hit + 1;

//             if (hit == 3){
//                 isSunk == true;
//                 alert('sunked')
//             }
//         } else{
//             alert('miss')
//         }
//     }
// }


while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
    } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
    alert("HIT!");
    hits = hits + 1;
    if (hits == 3) {
    isSunk = true;
    alert("You sank my battleship!");
    }
    } else {
    alert("MISS");
    }
    }
    }
    var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3/guesses);
    alert(stats);


/*
learn it later
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns){
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4)
console.log(totalCost)
*/


/*

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== ''){
    records[id][prop] = value;
  } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false){
    records[id][prop] = [value];
  } else if (prop === 'tracks' && value !== ''){
    records[id][prop].push(value)
  } else if (value === ''){
    delete records[id][prop]
  } else {
      return records;
  }
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

*/