var log = document.getElementById('Login');
var pass1 = document.getElementById('Password');
var pass2 = document.getElementById('Password2');
var email = document.getElementById('Email');
var butt = document.getElementById('regButt');
var registerField = document.getElementById('register');

var buttTxt = butt.innerHTML;
var minLength = 8;

registerField.onkeyup = function(){
    if(isEmpty(log, pass1, pass2, email)){
        disable(true);
        butt.innerHTML = 'Puste pola';
    } else {
        if(isMinLenght(pass1)){
            if(isEqual(pass1, pass2)){
                disable(false);
                butt.innerHTML = buttTxt;
            } else {
                disable(true);
                butt.innerHTML = 'Hasła się nie zgadzają';
            }
        } else {
            disable(true);
            butt.innerHTML = 'Hasło minimum '+minLength+' znaków';
        }

    }
};

var isEmpty = function(fd1, fd2, fd3, fd4){
    return (fd1.value == '' || fd2.value == '' || fd3.value == '' || fd4.value == '');
};

var isEqual = function(src1, src2){
    return src1.value == src2.value;
};

var isMinLenght = function(str){
    return str.value.length >= minLength;
};

var disable = function(st){
    (st === true)? butt.disabled = true : butt.disabled = false;
};

