const passwords = document.querySelectorAll('.password-box');
const btn = document.querySelector('#btn');

function generatePassword(){
    var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 8;
    var password = " ";

    for (var i = 0; i < passwordLength; i++){
        var RandomValue = Math.floor(Math.random() * characters.length);
        password += characters.substring(RandomValue, RandomValue +1)
    }

    return password;
}

btn.addEventListener('click', () => {
    passwords.forEach((password)=> {
        password.value = generatePassword();
    })
})
