const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const previousInputElement = document.querySelector('[data-previous-input]')
const currentInputElement = document.querySelector('[data-current-input]')




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
    this.currentInputElement.innerText = this.currentOperand

  }
}

const calculator = new Calculator (previousInputElement, currentInputElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

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




