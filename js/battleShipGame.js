var randomLocation = Math.floor(Math.random() * 5);
console.log(randomLocation)
var location1 = randomLocation;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var numberOfGuess = 0;
var isSunk = false;

while (!isSunk){
  guess = parseInt(prompt('enter a number'))

  if (guess < 0 || guess > 6){
    alert('enter a valid number')
  } else{
    numberOfGuess = numberOfGuess + 1;

    if (guess == location1 || guess == location2 || guess == location3){
      hits = hits + 1;
      alert('hit')
      

      if (hits == 3){
        isSunk = true;
        alert('sunked')
      }

    } else{
      alert('miss')
    }
  }
}
var scores = ('you took ' + numberOfGuess + ' guesses to sunk at ' + 3/numberOfGuess)
alert('your score is ' + scores)


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
  } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks')=== false){
    records[id][prop] = [value]
  } else if (prop === 'tracks' && value !== ''){
    records[id][prop].push(value)
  } else if (value === ''){
    delete records[id][prop];
  } 
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
*/