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

const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");
const operator = document.getElementById("operator");
const calculateButton = document.getElementById("calculate");
const history = document.getElementById("history");

const calcHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];

function calculate() {
  if (numberOne.value === "" || numberTwo.value === "") {
    return;
  }
  const a = Number(numberOne.value);
  const b = Number(numberTwo.value);
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

  const entry = `${a} ${operator.value} ${b} = ${result}`;

  calcHistory.unshift(entry);
  if (calcHistory.length > 5) {
    calcHistory.pop();
  }

  localStorage.setItem("calcHistory", JSON.stringify(calcHistory));
  numberOne.value = "";
  numberTwo.value = "";
  renderHistory();
}

function renderHistory() {
  history.innerText = "";

  calcHistory.forEach((entry) => {
    const newP = document.createElement("h2");
    newP.innerText = entry;
    newP.classList.add("historyPar");
    history.append(newP);
  });
}

calculateButton.addEventListener("click", calculate);

renderHistory();
