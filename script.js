// const numberButtons = document.querySelectorAll('[data-number]')

const operatorButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const previousInputElement = document.querySelector('[data-previous]')
const currentInputElement = document.querySelector('[data-current]')
console.log(currentInputElement)

window.onload = function main() {
  const numberButtons = document.querySelectorAll('[data-number]')

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log(button, "clicked")
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
}



class Calculator {
  constructor(previousInputElement, currentInputElement) {
    this.previousInputElement = previousInputElement
    this.currentInputElement = currentInputElement
  }

  delete () {

  }

  clear () {
    this.previousInputElement = ''
    this.currentInputElement = ''
    this.operation = undefined

  }

  /*this should in theory work with the update display function to populate the display in calculator, but not currently working. Trying to debug*/
  appendNumber(number) {
    this.currentOperand = number

  }

  choseOperator (operator) {

  }

  calculate() {

  }

  updateDisplay() {
    console.log (this)
    this.currentInputElement.innerText = this.currentOperand

  }
}

const calculator = new Calculator (previousInputElement, currentInputElement)

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




