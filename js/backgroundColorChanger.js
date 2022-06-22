// var changeColor = document.getElementById("box");
// var button = document.getElementById("btn");
// var myColorList = ["red", "blue", "green", "pink","red", "blue", "green", "pink", "orange", "gray"];
// var counter = 0;


// button.onclick = function colorFunction(){
//     if (counter > myColorList.length){
//         counter = 0;
//     };

//     changeColor.style.backgroundColor = myColorList[counter];
//     counter++;

//     var timer = setInterval(colorFunction, 2000)

//     button.onclick = function stopChanging(){
//         clearInterval(timer)
//     }
// }

const box = document.querySelector(`#box`);
const btn = document.querySelector(`#btn`);
const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`];

function colorChangeFunction(arr){
    let hexValue = `#`;

    for(let i = 1; i <= 6; i++){
        let randomValue = Math.floor(Math.random() * arr.length)
        hexValue += arr[randomValue];
    }
    return hexValue
};

btn.addEventListener(`click`, () => {
    let result = colorChangeFunction(myList);
    box.style.backgroundColor = result;
        // console.log(result)
})





var x = Math.random() * 5;
console.log(x)