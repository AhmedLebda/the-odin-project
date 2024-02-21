"use strict";

// Variables
let firstNumber = "";
let secondNumber = "";
let calcResult = "";
let operator = "";
let isFirstNumber = true;
let lastClickedValue = "";
let isOperatorClicked = false;

// DOM Variables
const resultDiv = document.querySelector("#result");
const options = document.querySelectorAll("#options button");
const keypad = document.querySelectorAll("#keypad button");
const operators = document.querySelectorAll("#operators button");

options.forEach((option) => {
	option.addEventListener("click", () => {
		switch (option.value) {
			// clear option: rest all variables to initial values
			case "clear":
				clearUI();
				break;
			// equal option: operate only if the the second number is given
			case "=":
				if (secondNumber) {
					operate(firstNumber, secondNumber, operator);
					// Updating UI (resultDiv)
					resultDiv.textContent = calcResult;
				}
				lastClickedValue = option.value;

				break;
			// back option: slice the last number from firstNumber or secondNumber depending on isFirstNumber state
			case "back":
				updateUI(option.value);
				break;
		}
	});
});

keypad.forEach((key) => {
	key.addEventListener("click", () => {
		// reset the calculator when the user tries to enter another number after the equal operator
		if (lastClickedValue === "=") {
			clearUI();
		}
		lastClickedValue = key.value;

		// update firstNumber and secondNumber depending on isFirstNumber state
		if (isFirstNumber) {
			firstNumber = firstNumber + key.value;
		} else {
			secondNumber = secondNumber + key.value;
		}

		// Update the UI (resultDiv)
		resultDiv.textContent += key.value;
	});
});

operators.forEach((operatorKey) => {
	operatorKey.addEventListener("click", () => {
		// Check for the last clicked value and only toggle between first and second number when the last clicked key is a number otherwise just change the
		if (+lastClickedValue || lastClickedValue === "0") {
			isFirstNumber = isFirstNumber ? false : true;
		}

		// Update the UI (resultDiv) depending on the last character in the result div so we don't print several operators in the result div
		updateUI(operatorKey.value);

		// Only do calculations when we have first and second numbers
		if (firstNumber && secondNumber) {
			operate(firstNumber, secondNumber, operator);
			resultDiv.textContent = calcResult + operatorKey.value;
		}

		operator = operatorKey.value;
		lastClickedValue = operatorKey.value;
	});
});

function operate(num1, num2, opr) {
	switch (opr) {
		case "+":
			calcResult = +num1 + +num2;
			break;
		case "-":
			calcResult = +num1 - +num2;
			break;
		case "*":
			calcResult = +num1 * +num2;
			break;
		case "/":
			calcResult = +num1 / +num2;
			calcResult = (+calcResult).toFixed(8);
			break;
		case "%":
			calcResult = +num1 % +num2;
			break;
	}
	firstNumber = calcResult;
	secondNumber = "";
	isFirstNumber = false;
}

// Updating UI (ResultDiv) depending on the last character in the result div only delete if the last character is a number
function updateUI(option) {
	let resultLastChar = resultDiv.textContent.slice(
		resultDiv.textContent.length - 1
	);
	if (option === "back") {
		if (+resultLastChar || resultLastChar === "0") {
			resultDiv.textContent = resultDiv.textContent.slice(
				0,
				resultDiv.textContent.length - 1
			);
		}
	} else {
		if (+resultLastChar || resultLastChar === "0") {
			resultDiv.textContent += option;
		} else {
			resultDiv.textContent =
				resultDiv.textContent.slice(0, resultDiv.textContent.length - 1) +
				option;
		}
	}
}

function clearUI() {
	firstNumber = "";
	secondNumber = "";
	calcResult = "";
	operator = "";
	isFirstNumber = true;
	lastClickedValue = "";
	isOperatorClicked = false;
	resultDiv.textContent = "";
}

// ******************** For testing ********************
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		console.log(`First Number: ${firstNumber}`);
		console.log(`Operator : ${operator}`);
		console.log(`Second Number: ${secondNumber}`);
		console.log(`Calculation Result: ${calcResult}`);
		console.log(`Is First Number: ${isFirstNumber}`);
		console.log(`Last clicked Value: ${lastClickedValue}`);
		console.log(`=========================`);
	});
});
