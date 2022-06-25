// variable the holds the value of the kelvin value
const kelvin = 0;
// converting celsius to kelvin
const Celsius = kelvin - 273;
// calculating fahrenheit
// the formular is Celsius multiply by (9/5) plus 32
// using javascript maths.random function to round it down to the nearest hold number
let fahrenheit = Math.floor( Celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degress Fahrenheit.`)
