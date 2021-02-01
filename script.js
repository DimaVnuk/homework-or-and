let nameValue = prompt('Enter your name');
let surnameValue = prompt('Enter your surname');
let nicknameValue = prompt('Enter your nickname');
if(nameValue && surnameValue && nicknameValue){
alert('Hello ' + nameValue + ' ' + ' ' + surnameValue);
}
else if(nameValue && surnameValue){
    alert('Hello ' + nameValue + ' ' + ' ' + surnameValue);
}
else if(surnameValue && nicknameValue){
    alert('Hello ' + nicknameValue);
}
else if(nameValue && nicknameValue){
    alert('Hello ' + nameValue);
}
else{
    alert('Hello Noname');
}