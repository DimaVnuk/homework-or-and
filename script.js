let nameValue = prompt('Enter your name');
let surnameValue = prompt('Enter your surname');
let nicknameValue = prompt('Enter your nickname');
if (nameValue && surnameValue && nicknameValue) {
    alert('Hello ' + nameValue + ' ' + ' ' + surnameValue);
}
else if (nameValue && surnameValue) {
    alert('Hello ' + nameValue + ' ' + ' ' + surnameValue);
}
else if (surnameValue && nicknameValue) {
    alert('Hello ' + nicknameValue);
}
else if (nameValue && nicknameValue) {
    alert('Hello ' + nameValue);
} else {
    alert('Hello Noname');
}
/* case 1 */

let numberValue = +prompt('Enter your number');
let numberEven = numberValue % 2 == 0;
let numberOdd = numberValue % 2 !== 0;
let numberPositive = numberValue > 0; 
let numberNegative = numberValue < 0; 
let numberInteger = numberValue % 1 == 0;
let numberFractional = numberValue % 1 !== 0;
let numberIsMoreHundred = numberValue > 100; 
let numberLessThanHundred = numberValue < 100;
let numberEqualsHundred = numberValue == 100; 
if(numberEven && numberPositive && numberInteger && numberIsMoreHundred){
alert('четное, положитьное, целое, больше ста')
}
else if(numberOdd && numberNegative && numberFractional && numberLessThanHundred){
    alert('нечетное,  отрицательное,  дробное,   меньше ста')
}
else if(numberOdd && numberNegative && numberInteger && numberLessThanHundred){
    alert('нечетное,  отрицательное,  целое,   меньше ста')
}
else if(numberEven && numberNegative && numberFractional && numberLessThanHundred){
    alert('четное,  отрицательное,  дробное,   меньше ста')
}
else if(numberEven && numberNegative && numberFractional && numberIsMoreHundred){
    alert('четное,  отрицательное,  дробное,   больше ста')
}
else if(numberOdd && numberPositive && numberInteger && numberIsMoreHundred){
    alert('нечетное,  положитьное,  целое,   больше ста')
}
else if(numberEven && numberNegative && numberInteger && numberLessThanHundred){
    alert('четное,  отрицательное,  целое,   меньше ста')
}
else if(numberEven && numberPositive && numberInteger && numberLessThanHundred){
    alert('четное,  положительное,  целое,   меньше ста')
}
else if(numberEven && numberPositive && numberInteger && numberEqualsHundred){
    alert('четное,  положитьное,  целое,   равно ста')
}
else if(numberOdd && numberPositive && numberFractional && numberLessThanHundred){
    alert('нечетное,  положитьное,  дробное,   меньше ста')
}
else if(numberOdd && numberPositive && numberInteger && numberLessThanHundred){
    alert('нечетное,  положитьное,  целое,   меньше ста')
}
else if(numberOdd  && numberPositive && numberFractional && numberIsMoreHundred){
    alert('нечетное,  положитьное,  дробное,   больше ста')
}
else {
    alert('OOOPS, its a BUG')
}
/* 2 case */


let valueNumberFirst = prompt('enter your number');
let valueNumberSecond = prompt('enter your second number');
let valueNumberThird = prompt('enter your third number');
let message = valueNumberFirst ? alert(Number(valueNumberFirst) + Number(valueNumberSecond) + Number(valueNumberThird)):
alert('Bye');
/* case 3.1 */

let nameValue = prompt('enter your name');
let age = prompt('enter your age');
let alertMessage = (age > 17) ? alert('Welcome ' + nameValue) : alert('Sorry ' + nameValue + ' access is closed');
/* case 3.2 */

let numberUserValue = prompt('Enter your number');
switch (numberUserValue || isNaN(numberUserValue)) {
    case 0:
        alert('zero');
    case 1:
        alert('one');
    case 2:
        alert('two');
    case 3:
        alert('three');
    case 4:
        alert('four');
    case 5:
        alert('five');
    case 6:
        alert('six');
    case 7:
        alert('seven');
    case 8:
        alert('eight');
    case 9:
        alert('nine');
        break
    default:
        alert('too much')
}
/* case 4 */


