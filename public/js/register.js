var log = document.getElementById('Login');
var pass1 = document.getElementById('Password');
var pass2 = document.getElementById('Password2');
var email = document.getElementById('Email');
var butt = document.getElementById('regButt');
var registerField = document.getElementById('register');

var buttTxt = butt.innerHTML;

registerField.onkeyup = function(){
    if(check()) butt.disabled = false;
    else  butt.disabled = true;
}

function check(){
    if(log.value == '' || pass1.value == '' || pass2.value == '' || email.value == '') {
        butt.innerHTML = 'Puste pola';
        return false;
    } else {
        if(minLength(pass1)){
            if(pass1.value == pass2.value){
                butt.innerHTML = buttTxt;
                return true;
            } else {
                butt.innerHTML = 'Hasła się nie zgadzają';
                return false;
            }
        } else {
            butt.innerHTML = 'Hasło minimum 8 znaków';
            return false;
        }
    }
}

function minLength(pass){
    return pass.value.length >= 8;
}