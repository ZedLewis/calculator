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
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  
  clear () {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

// Performs operations and moves numbers to and from input elements accordingly
  compute() {
    let result
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    console.log(this.operator)
    if(isNaN(prev) || isNaN(current)) return
    switch (this.operator) {
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
    // Ideally this concatenates number and operand in previous input, not working as it stands. 
    if (this.operation != null) {
    this.previousInputElement.innerText = 
     `${this.previousOperand} ${this.operation}`
    }
    this.previousInputElement.innerText = this.previousOperand
  }
}

// functions populate calculator display
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

// calculates and updates display
equalsButton.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay()
})

clearButton.addEventListener('click', () => {
  console.log("clicked")
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
  console.log("clicked")
  calculator.delete()
  calculator.updateDisplay()
})

const calculator = new Calculator (previousInputElement, currentInputElement)


