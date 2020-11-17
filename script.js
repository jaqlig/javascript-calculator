const clear = document.getElementById('clear');
const sign = document.getElementById('sign');
const percent = document.getElementById('percent');
const equal = document.getElementById('equal');
const display = document.getElementById('displayInput');
const dot = document.getElementById('dot');
const buttons = document.getElementsByClassName('button');
const operators = document.getElementsByClassName('operator');

let value = '';
let result = 0;
let operator = '';

//number input
for(let i=0; i<buttons.length; i++) buttons[i].addEventListener('click', e => {
    if(Math.round(value).toString().length < 10){
    value += e.target.textContent;
    display.textContent = value;
    }
});

//operator input
for(let i=0; i<operators.length; i++) operators[i].addEventListener('click', e => {
    operator = e.target.textContent;
    
    if (value !== 0 && result !== 0) count();

    value = parseFloat(value);
    result = value;
    value = '';
    
});

function count(){
  value = parseFloat(value);
    switch (operator){
        case '+':
            result += value;
            break;
        case '-':
            result -= value;
            break;
        case '*':
            result *= value;
            break;
        case '/':
            if(value == 0) break;
            result /= value;
            break;
        default:
            break;
    }

    let resultLen = Math.round(result).toString().length;
    if (resultLen > 11) result = 'Too big'
    else result = +parseFloat(result).toFixed(10 - resultLen);

    if(value === 0 && operator === '/') display.textContent = 'Don\'t do it';
    else display.textContent = result;

    value = result;
    result = 0;
    operator = '';
}

equal.addEventListener('click', count);

clear.addEventListener('click', function(){
    value = '';
    result = 0;
    operator = '';
    display.textContent = 0;
});

dot.addEventListener('click', function(){
    if (value.indexOf('.') === -1){
    value += '.';
    display.textContent = parseFloat(value) + '.';
    }
});

percent.addEventListener('click', function(){
    value = parseFloat(value)/100;
    let valueLen = Math.round(value).toString().length;
    value = +parseFloat(value).toFixed(10 - valueLen);
    display.textContent = value;
});

sign.addEventListener('click', function(){
    value *= -1;
    display.textContent = value;
});
