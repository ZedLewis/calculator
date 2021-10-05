const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const previousInputElement = document.querySelector('[data-previous]')
const currentInputElement = document.querySelector('[data-current]')

console.log(equalsButton)

class Calculator {
  constructor(previousInputElement, currentInputElement) {
    this.previousInputElement = previousInputElement
    this.currentInputElement = currentInputElement
    this.currentOperand = ''
    this.previousOperand = ''
  }

  delete () {

  }

  clear () {
    this.previousInputElement = ''
    this.currentInputElement = ''
    this.operation = undefined

  }
// Function is not being recognised when called upon, trying to debug
  compute() {
    let result
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if(isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        result = prev + current
        break
      case '-':
        result = prev - current
        break
      case 'x':
        result = prev * current
        break
      case '÷':
        result = prev / current
        break 
      default:
        return
    }
    this.currentOperand = result
    this.operation = undefined
    this.previousOperand = ''
  }

  // Function ends if more than one decimal with return
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
    
  }

  choseOperator(operator) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operator = operator
    this.previousOperand = this.currentOperand
    this.currentOperand = ''

  }


  updateDisplay() {
    this.currentInputElement.innerText = this.currentOperand
    this.previousInputElement.innerText = this.previousOperand

  }
}

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button, "clicked")
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button, "clicked")
    calculator.choseOperator(button.innerText)
    calculator.updateDisplay()
  })
})


equalsButton.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay()
})

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




