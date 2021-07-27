
let inputNumber = prompt(`Введіть число`);
let total = 1;
let i = 0;
while(i < inputNumber){
    total = total * (inputNumber - i);
    i++;
}
alert(inputNumber + '! = ' + total);