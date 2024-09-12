function appendToDisplay(value) {
  var display = document.getElementById("display");
  var lastChar = display.value.slice(-1);
  var operators = ["+", "-", "*", "/"];
  if (operators.includes(lastChar) && operators.includes(value)) {
    return;
  }
  if (display.value.length < 20) {
    display.value += value;
  }
}
function clearDisplay() {
  var display = document.getElementById("display");
  display.value = "";
}
function deleteLastCharacter() {
  var display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
function calculate() {
  var display = document.getElementById("display");
  var expression = display.value;
  var lastChar = expression.slice(-1);
  var operators = ["+", "-", "*", "/"];
  if (operators.includes(lastChar)) {
    expression = expression.slice(0, -1);
  }
  try {
    var result = new Function("return " + expression)();
    if (!isNaN(result) && isFinite(result)) {
      display.value = result.toString();
    } else {
      display.value = "Error";
    }
  } catch (e) {
    display.value = "Error";
  }
}
