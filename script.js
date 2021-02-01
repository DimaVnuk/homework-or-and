let nameValue = prompt('Enter your name');
let surnameValue = prompt('Enter your surname');
let nicknameValue = prompt('Enter your nickname');
if(nameValue && surnameValue && nicknameValue){
alert('Hello ' + nameValue + surnameValue);
}
else{
    alert('Hello noname');
}