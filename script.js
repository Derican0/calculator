// Math operators

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "Nice try";
    }
    return a / b;
}

// Variables
let a;
let b;
let operator;

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        return divide(a, b);
    }
}

// Store value from buttons and display on screen

// Take input of first number via string concatenation (max size)

// When operator is chosen after first number is NOT empty
// Then it stores and displays operator

// Take input of second number

// When operator is pressed, not any other operator, then evalute
// via operate function


let aInput = "";
let bInput = "";
let operatorInput = "";

const screen = document.querySelector('.screen');

const digitBtns = document.querySelectorAll('._0, ._1, ._2, ._3, ._4, ._5, ._6, ._7, ._8, ._9');
digitBtns.forEach((button) => {
    button.addEventListener("click", () => {
        const digit = button.textContent;
        if (operatorInput === "") {
            aInput += digit;
            screen.textContent = aInput;
        }
        else {
            bInput += digit;
            screen.textContent = bInput;
        }
    })
});

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        const symbol = button.textContent;
        if (operatorInput === "") {
            operatorInput = symbol;
            screen.textContent = operatorInput;
            already_clicked = 0;
        }
        // Otherwise do nothing
    });
});

const equalBtn = document.querySelector('.equals');
equalBtn.addEventListener("click", () => {
    if (aInput === "" || bInput === "" || operatorInput === "") {
        // Invalid/missing inputs
        return;
    }
    else {
        console.log(`${Number(aInput)} ${Number(bInput)}`);
        let result = operate(operatorInput, Number(aInput), Number(bInput));
        if (isNaN(result)) {
            screen.textContent = result;
            aInput = "";
        }
        else {
            result = Math.round(result * 1000000000) / 1000000000;
            screen.textContent = result;
            console.log(result);
            // Reset inputs
            aInput = result.toString();
        }
        bInput = "";
        operatorInput = "";
        already_clicked = 0;
    }
})

let already_clicked = 0;
const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", () => {
    if (already_clicked === 0) {
        already_clicked = 1;
        if (operatorInput === "") {
            aInput += '.';
            screen.textContent = aInput;
        }
        else {
            bInput += '.';
            screen.textContent = bInput;
        }
    }
});

const deleteBtn = document.querySelector(".clear");
deleteBtn.addEventListener("click", () => {
    aInput = "";
    bInput = "";
    operatorInput = "";
    screen.textContent = "";
})

document.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (!isNaN(event.key)) {
        const digit = event.key;
        if (operatorInput === "") {
            aInput += digit;
            screen.textContent = aInput;
        }
        else {
            bInput += digit;
            screen.textContent = bInput;
        }
    }
});
