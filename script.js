const numberButtons = document.getElementsByClassName('number')
const operatorButtons = document.getElementsByClassName('operator')
const display = document.getElementById('screen')

let displayNumber = '';

function add (a, b) {
return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function appendNumber (number) {

}

numberButtons.forEach((button) => 
  button.addEventListener('click', () => appendNumber(display.textContent))
)

operatorButtons.forEach((button) => 
  button.addEventListener('click', () => appendNumber(display.textContent))
)




