const display = document.querySelector('.current-operand');

let firstValue = undefined;
let secondValue = undefined;
let currentOperator = undefined;

function appendValue(number) {
    if (number === '.' && display.innerText.includes('.')) return;
    
    if (display.innerText === '0' && number !== '.') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    firstValue = display.innerText; // Save the first number
    currentOperator = operator;     // Save the + - * /
    display.innerText = '';         // Instantly clear the screen
}

function calculate() {
    if (firstValue === undefined || currentOperator === undefined || display.innerText === '') return;

    secondValue = display.innerText; // Grab the second number from the screen
    let result;

    // Convert strings to actual decimals for math
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

    switch (currentOperator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
    }

    display.innerText = Math.round(result * 100000000) / 100000000; // Rounds long decimals
    
    firstValue = display.innerText; 
    currentOperator = undefined;
}

// Clear everything when 'C' is pressed
function clearDisplay() {
    display.innerText = '';
    firstValue = undefined;
    secondValue = undefined;
    currentOperator = undefined;
}


document.querySelectorAll('.btn-number').forEach(button => {
    button.addEventListener('click', () => appendValue(button.innerText));
});

document.querySelectorAll('.btn-operator').forEach(button => {
    button.addEventListener('click', () => appendOperator(button.innerText));
});

document.querySelector('.btn-equals').addEventListener('click', calculate);

document.querySelector('.btn-clear').addEventListener('click', clearDisplay);