// variable the holds the value of the kelvin value
const kelvin = 0;
// converting celsius to kelvin
const Celsius = kelvin - 273;
// calculating fahrenheit
// the formular is Celsius multiply by (9/5) plus 32
// using javascript maths.random function to round it down to the nearest hold number
let fahrenheit = Math.floor( Celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degress Fahrenheit.`)

const myArray = [1,2,3,4,5];

function testFunction(arr, item){
    console.log(arr.push(item));
    removed = arr.shift();
    return removed;
}

testFunction(myArray, 6);
console.log(myArray)

const result = testFunction(myArray)
console.log(result)
console.log(myArray)


function test(value){
    if (value){
        return 'it is true'
    }
    return 'it is false'
}

answ = test(false)
console.log(answ)


const list = [1,2,4,7,3];

function FindingMax(arr){
   max = -Infinity;
   for (let i = 0; i < arguments.length; i++){
    if (arguments[i] > max){
        max = arguments[i]
    }
   }
   return max;
}
const answ2 = FindingMax(list)
console.log(answ2)



const counter = 0;
const btn = document.getElementById('btn');
setTimeout(count, 3000)
const btn2 = document.getElementById('btn2');

// btn.addEventListener('click', () => {
//     console.log(counter++)
// })

function count(){
    console.log(counter++)
}
const flash = setTimeout( () => {
    console.log('hell')
}, 4000)

// btn2.addEventListener('click', clearInterval(flash))