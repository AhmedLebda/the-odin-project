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

					updateUI.updateEqual();
				} else {
					updateUI.updateOperator(option.value);
				}

				// lastClickedValue = option.value;
				break;

			// back option: slice the last number from firstNumber or secondNumber depending on isFirstNumber state
			case "back":
				if (isFirstNumber) {
					firstNumber = firstNumber.slice(0, firstNumber.length - 1);
				} else {
					secondNumber = secondNumber.slice(0, secondNumber.length - 1);
				}
				updateUI.backspace(option.value);
				break;
		}
	});
});

keypad.forEach((key) => {
	key.addEventListener("click", () => {
		// reset the calculator when the user tries to enter another number after the equal operator
		if (resultDiv.textContent.slice(resultDiv.textContent.length - 1) === "=") {
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
		updateUI.updateKey(key.value);
	});
});

operators.forEach((operatorKey) => {
	operatorKey.addEventListener("click", () => {
		// Check for the last clicked value and only toggle between first and second number when the last clicked key is a number
		if (+lastClickedValue || lastClickedValue === "0") {
			isFirstNumber = isFirstNumber ? false : true;
		}

		updateUI.updateOperator(operatorKey.value);

		// Only do calculations when we have first and second numbers
		if (firstNumber && secondNumber) {
			operate(firstNumber, secondNumber, operator);

			updateUI.updateChainCalc(operatorKey.value);
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
			if (num2 == "0") {
				clearUI();
				alert("Cannot divide by zero");
				break;
			}
			calcResult = +num1 / +num2;
			calcResult = Math.floor(+calcResult * 10000) / 10000;
			break;
		case "%":
			calcResult = +num1 % +num2;
			break;
	}
	firstNumber = calcResult;
	secondNumber = "";
	isFirstNumber = false;
}

const updateUI = {
	backspace() {
		let resultLastChar = resultDiv.textContent.slice(
			resultDiv.textContent.length - 1
		);
		if (+resultLastChar || resultLastChar === "0") {
			resultDiv.textContent = resultDiv.textContent.slice(
				0,
				resultDiv.textContent.length - 1
			);
		}
	},
	updateOperator(opr) {
		let resultLastChar = resultDiv.textContent.slice(
			resultDiv.textContent.length - 1
		);
		if (+resultLastChar || resultLastChar === "0") {
			resultDiv.textContent += opr;
		} else {
			resultDiv.textContent =
				resultDiv.textContent.slice(0, resultDiv.textContent.length - 1) + opr;
		}
	},

	updateKey(keyVal) {
		resultDiv.textContent += keyVal;
	},

	updateChainCalc(opr) {
		resultDiv.textContent = calcResult + opr;
	},

	updateEqual() {
		resultDiv.textContent = calcResult;
	},
};

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
