function appendToDisplay(value: string): void {
  const display = document.getElementById("display") as HTMLInputElement;

  const lastChar = display.value.slice(-1);
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(lastChar) && operators.includes(value)) {
    return;
  }

  if (display.value.length < 20) {
    display.value += value;
  }
}

function clearDisplay(): void {
  const display = document.getElementById("display") as HTMLInputElement;
  display.value = "";
}

function deleteLastCharacter(): void {
  const display = document.getElementById("display") as HTMLInputElement;
  display.value = display.value.slice(0, -1);
}

function calculate(): void {
  const display = document.getElementById("display") as HTMLInputElement;
  let expression = display.value;

  const lastChar = expression.slice(-1);
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(lastChar)) {
    expression = expression.slice(0, -1);
  }

  try {
    const result = new Function("return " + expression)();

    if (!isNaN(result) && isFinite(result)) {
      display.value = result.toString();
    } else {
      display.value = "Error";
    }
  } catch (e) {
    display.value = "Error";
  }
}
