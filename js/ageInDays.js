let clickMe = document.getElementById('clickMe');
let reset = document.getElementById('clear');

clickMe.addEventListener('click', () => {
    let userInput = prompt('Enter your birth year! ')
    let result = (2022 - userInput) * 360;
    let h1 = document.createElement('h1');
    let text = document.createTextNode('you are ' + result + ' years in days!');
    h1.appendChild(text);
    h1.setAttribute('id', 'message');
    let display = document.getElementById('display');
    display.appendChild(h1)

})

reset.addEventListener('click', () => {
    message.remove()
})



// function imageGenerator() {
//      var image = document.createElement('img');
//      image.src = 'explainer-how-bad-is-the-hack-that-targeted-us-agencies.jpg';
//      document.getElementById('box').appendChild(image);
// }
// generate.addEventListener('click', () => {
//     var image = document.createElement('img').style.width = '100px';
//     image.src = 'explainer-how-bad-is-the-hack-that-targeted-us-agencies.jpg'
//     document.getElementById('box').appendChild(image);
// })