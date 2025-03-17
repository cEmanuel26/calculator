const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const equal = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');
const division = document.querySelector('.btn-divide');
const multiplication = document.querySelector('.btn-multiply');
const add = document.querySelector('.btn-add');
const substraction = document.querySelector('.btn-substract');
const power = document.querySelector('.btn-power');
const operators = Array.from(document.querySelectorAll('.mathNumbers'));
let operand1 = 0;
let operator = '';
let disabledButtons = false;
let nextOperand = false;
let operatorPressed = false;

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (disabledButtons) {
      return;
    }
    const value = e.target.getAttribute('data-number');
    if (operatorPressed) {
      clearScreen();
      nextOperand = true;
    }
    screen.textContent += value;
    operatorPressed = false;
  });
});

clear.addEventListener('click', function () {
  clearScreen();
  operand1 = 0;
  operator = '';
  disabledButtons = false;
  nextOperand = false;
  operatorPressed = false;
});

add.addEventListener('click', function () {
  operator = '+';
  operatorPressed = true;
  operand1 = screen.textContent.trim();
  disabledButtons = false;
});
multiplication.addEventListener('click', function () {
  operator = '*';
  operatorPressed = true;
  operand1 = screen.textContent.trim();
  disabledButtons = false;
});
division.addEventListener('click', function () {
  operator = '/';
  operatorPressed = true;
  operand1 = screen.textContent.trim();
  disabledButtons = false;
});
substraction.addEventListener('click', function () {
  operator = '-';
  operatorPressed = true;
  operand1 = screen.textContent.trim();
  disabledButtons = false;
});
power.addEventListener('click', function () {
  operator = '**';
  operatorPressed = true;
  operand1 = screen.textContent.trim();
  disabledButtons = false;
});

equal.addEventListener('click', function () {
  if (nextOperand) {
    const operand2 = screen.textContent.trim();

    if (operator === '+') {
      screen.textContent = sum(parseInt(operand1), parseInt(operand2));
    } else if (operator === '-') {
      screen.textContent = substract(parseInt(operand1), parseInt(operand2));
    } else if (operator === '/') {
      screen.textContent = divide(parseInt(operand1), parseInt(operand2));
    } else if (operator === '*') {
      screen.textContent = multiply(parseInt(operand1), parseInt(operand2));
    } else if (operator === '**') {
      screen.textContent = pow(parseInt(operand1), parseInt(operand2));
    }
    disabledButtons = true;
    nextOperand = false;
  }
});

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}
function multiply(a, b) {
  return a * b;
}
function pow(a, b) {
  return a ** b;
}

function operate(operator, a, b) {
  return operator(a, b);
}

function clearScreen() {
  screen.textContent = '';
}
