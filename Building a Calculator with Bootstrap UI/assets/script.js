let number_one;
let number_two;
let operator;
let result_display = document.getElementById("result");
let error_display = document.getElementById("error");

//perform validation
function validate() {
  number_one = parseFloat(document.getElementById("numberOne").value);
  number_two = parseFloat(document.getElementById("numberTwo").value);
  let operator = document.getElementById("operator").value;

  // Perform client-side validation
  if (number_one === "" || number_two === "" || operator === "") {
    error = "Please fill in all fields";
    error_display.classList.add("d-block");
    error_display.classList.remove("d-none");
  } else if (isNaN(number_one) || isNaN(number_two)) {
    error = "Please provide a valid number";
    error_display.classList.add("d-block");
    error_display.classList.remove("d-none");
  } else if (
    operator !== "add" &&
    operator !== "subtract" &&
    operator !== "multiply" &&
    operator !== "divide"
  ) {
    error = "Please select a valid operator";
    error_display.classList.add("d-block");
    error_display.classList.remove("d-none");
  } else if (operator === "divide" && number_two === 0) {
    error = "Cannot divide by zero";
    error_display.classList.add("d-block");
    error_display.classList.remove("d-none");
  } else {
    error = "";
    error_display.classList.add("d-none");
  }

  return error;
}

//perform bootstrap validation if input field is not empty and have a number value
function validateInput() {
  let number_one = parseFloat(document.getElementById("numberOne").value);
  let number_two = parseFloat(document.getElementById("numberTwo").value);
  let operator = document.getElementById("operator").value;

  if (isNaN(number_one)) {
    document.getElementById("numberOne").classList.add("is-invalid");
    document.getElementById("numberOne").classList.remove("is-valid");
  } else {
    document.getElementById("numberOne").classList.add("is-valid");
    document.getElementById("numberOne").classList.remove("is-invalid");
  }

  if (isNaN(number_two)) {
    document.getElementById("numberTwo").classList.add("is-invalid");
    document.getElementById("numberTwo").classList.remove("is-valid");
  } else {
    document.getElementById("numberTwo").classList.add("is-valid");
    document.getElementById("numberTwo").classList.remove("is-invalid");
  }

  if (operator === "") {
    document.getElementById("operator").classList.add("is-invalid");
    document.getElementById("operator").classList.remove("is-valid");
  } else {
    document.getElementById("operator").classList.add("is-valid");
    document.getElementById("operator").classList.remove("is-invalid");
  }
}

function calculate() {
  validateInput();
  number_one = parseFloat(document.getElementById("numberOne").value);
  number_two = parseFloat(document.getElementById("numberTwo").value);
  operator = document.getElementById("operator").value;

  let result;
  let error = validate();

  // If there's no error, perform calculation
  if (!error) {
    switch (operator) {
      case "add":
        result = number_one + number_two;
        break;
      case "subtract":
        result = number_one - number_two;
        break;
      case "multiply":
        result = number_one * number_two;
        break;
      case "divide":
        result = number_one / number_two;
        break;
    }
  }

  //check if result is null or undefined
  if (result === null || result === undefined) {
    document.getElementById("result").classList.add("d-none");
  } else {
    document.getElementById("result").classList.remove("d-none");
  }

  // Display the result and error
  result_display.innerHTML =
    result !== undefined ? "Result: " + result.toFixed(2) : "";
  error_display.innerHTML = error || "";
}

document.getElementById("calculate_btn").addEventListener("click", calculate);
