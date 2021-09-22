let dataNumbers = document.querySelectorAll("[data-number]");
let dataOperation = document.querySelectorAll("[data-operation]");
let currentOperand = document.querySelector(".current-operand");
let previousOperand = document.querySelector(".previous-operand");
let previousOperandData = "";
let currentOperandData = "";
let selectedOperation = "";
let previousOperation = "";

document.querySelector("[data-equals").addEventListener("click", function (e) {
  currentOperandData = calculate(selectedOperation);
  currentOperand.innerHTML = currentOperandData;
  previousOperand.innerHTML = "";
  previousOperandData = "";
});
document
  .querySelector("[data-all-clear]")
  .addEventListener("click", function () {
    currentOperand.innerHTML = "";
    previousOperand.innerHTML = "";
    currentOperandData = "";
    previousOperandData = "";
  });

document.querySelector("[data-delete]").addEventListener("click", function () {
  if (currentOperandData.trim()) {
    currentOperandData = currentOperandData.substring(
      0,
      currentOperandData.length - 1
    );
    currentOperand.innerHTML = currentOperandData;
  }
});
for (let i = 0; i < dataNumbers.length; i++) {
  dataNumbers[i].addEventListener("click", function (e) {
    currentOperandData += e.target.innerText;
    currentOperand.innerHTML = currentOperandData;
  });
}

for (let i = 0; i < dataOperation.length; i++) {
  dataOperation[i].addEventListener("click", function (e) {
    if (currentOperandData.trim()) {
      if (previousOperandData.trim()) {
        previousOperandData = calculate(selectedOperation);
      } else {
        previousOperandData = currentOperandData;
      }
      selectedOperation = e.target.innerHTML;
      currentOperandData = "";
      previousOperand.innerHTML = previousOperandData;
      currentOperand.innerHTML = "";
    }
  });
}

function calculate(operation) {
  let calulatedValue = 0;
  switch (operation) {
    case "*":
      calulatedValue = Number(previousOperandData) * Number(currentOperandData);
      break;
    case "+":
      calulatedValue = Number(previousOperandData) + Number(currentOperandData);
      break;
    case "-":
      calulatedValue = Number(previousOperandData) - Number(currentOperandData);
      break;
    case "÷":
      calulatedValue = Number(previousOperandData) / Number(currentOperandData);
      break;
  }
  return String(calulatedValue);
}
