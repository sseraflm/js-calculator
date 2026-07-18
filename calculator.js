"use strict";
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
    if (b === 0) {
        return "You cannot divide by zero.";
    }
    return a / b;
}

const a = Number(prompt("Type the first number:", ""));
const b = Number(prompt("Type the second number:", ""));
const operator = prompt("Type the operator you wish to use:", "");

function calculate(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b);

        case "-":
            return subtract(a, b);

        case "*":
            return multiply(a, b);

        case "/":
            return divide(a, b);

        default:
            return "Invalid operator";
    }
}

const result = calculate(a, operator, b);
console.log(result);
