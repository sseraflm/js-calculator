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

let numberOne = document.getElementById("numberOne");
let numberTwo = document.getElementById("numberTwo");
let operator = document.getElementById("operator");
let calculateButton = document.getElementById("calculate");
let history = document.getElementById("history");
function calculate() {
    if (numberOne.value === "" || numberTwo.value === "") {
        return;
    }
    let a = Number(numberOne.value);
    let b = Number(numberTwo.value);
    let result;
    switch (operator.value) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        default:
            result = "Invalid operator";
    }
    let newP = document.createElement("p");
    newP.innerText = `${a} ${operator.value} ${b} = ${result}`;
    newP.classList.add("historyPar");
    history.append(newP);
    numberOne.value = "";
    numberTwo.value = "";
}

calculateButton.addEventListener("click", calculate);
