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
/* end case 1 */

let numberValue = +prompt('Enter your number');
let numberEven = numberValue % 2 == 0; /* четное */
let numberOdd = numberValue % 2 !== 0; /* нечетное */
let numberPositive = numberValue > 0; /* положитьное */
let numberNegative = numberValue < 0; /* отрицательное */
let numberInteger = numberValue % 1 == 0;/* целое */
let numberFractional = numberValue % 1 !== 0;/* дробное */
let numberIsMoreHundred = numberValue > 100; /* больше ста */
let numberLessThanHundred = numberValue < 100; /* меньше ста */
let numberEqualsHundred = numberValue == 100; /* равно ста */
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
    alert('OOOPS, its aBUG')
}
