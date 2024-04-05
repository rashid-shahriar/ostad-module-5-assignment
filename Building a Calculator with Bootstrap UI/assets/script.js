const numberOneInput = document.getElementById("numberOne");
const numberTwoInput = document.getElementById("numberTwo");
const operatorSelect = document.getElementById("operator");
const resultDisplay = document.getElementById("result");
const errorDisplay = document.getElementById("error");

//perform validation
function validate() {
  const numberOne = numberOneInput.value;
  const numberTwo = numberTwoInput.value;
  const operator = operatorSelect.value;

  // Perform client-side validation
  if (!numberOne || !numberTwo) {
    displayError("Please fill in all fields");
    return true;
  } else if (isNaN(numberOne.trim()) || isNaN(numberTwo.trim())) {
    displayError("Please provide a valid number");
    return true;
  } else if (
    operator !== "addition" &&
    operator !== "subtract" &&
    operator !== "multiply" &&
    operator !== "divide"
  ) {
    displayError("Please select a valid operator");
    return true;
  } else {
    clearError();
    return false;
  }
}

function calculate() {
  if (!validate()) {
    // Only proceed if validation passes
    const numberOne = parseFloat(numberOneInput.value);
    const numberTwo = parseFloat(numberTwoInput.value);
    const operator = operatorSelect.value;
    let result;

    switch (operator) {
      case "addition":
        result = numberOne + numberTwo;
        break;
      case "subtract":
        result = numberOne - numberTwo;
        break;
      case "multiply":
        result = numberOne * numberTwo;
        break;
      case "divide":
        result = numberOne / numberTwo;
        if (numberTwo === 0) {
          displayError("Cannot divide by zero");
          return;
        }
        break;
    }
    displayResult(result);
  }
}

function displayError(errorMessage) {
  errorDisplay.classList.remove("d-none");
  errorDisplay.textContent = errorMessage;
  resultDisplay.classList.add("d-none");
}

function clearError() {
  errorDisplay.classList.add("d-none");
  errorDisplay.textContent = "";
}

function displayResult(result) {
  resultDisplay.classList.remove("d-none");
  resultDisplay.textContent = "Result: " + result;
}

document.getElementById("calculate_btn").addEventListener("click", calculate);
