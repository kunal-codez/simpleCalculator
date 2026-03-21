const display = document.getElementById("display");
const operator = ['+', '-', '*', '/', '%'];
function appendToDisplay(input) {
   const lastDisplay = display.value.slice(-1);
   if (operator.includes(lastDisplay) && operator.includes(input)) {
      display.value = display.value.slice(0, -1) + input;
   }
   else {
      display.value += input;
   }
}

function clearDisplay() {
   display.value = "";
}

function backspace() {
   display.value = display.value.slice(0, -1);
}

function calculate() {
   try {
      display.value = eval(display.value);
   }
   catch (error) {
      display.value = "Error";
   }
}