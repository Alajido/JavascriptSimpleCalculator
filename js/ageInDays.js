let click = document.getElementById('click');
let reset = document.getElementById('clear');
let display = document.getElementById('display');
let text = document.getElementById('text');

click.addEventListener('click', () => {
    var userAge = prompt('How old are you?');
    var result = (2022 - userAge) * 360;
    // text.innerHTML = 'you are ' + result + ' in days';
    console.log(result)
    var h1 = document.createElement('h1');
    var note = document.createTextNode('you are ' + result + ' in days');
    h1.appendChild(note);
    document.getElementById('display').appendChild(h1);  
})



reset.addEventListener('click', () => {
    display.remove()
    box.remove()
})

// function imageGenerator() {
//     var image = document.createElement('img');
//     image.src = 'explainer-how-bad-is-the-hack-that-targeted-us-agencies.jpg';
//     document.getElementById('box').appendChild(image);
// }