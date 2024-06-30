let output = "";

function clearScreen() {
  output = "";
  document.getElementById("result").value = output;
}

function display(value) {
  output += value;
  document.getElementById("result").value = output;
}

function calculate() {
  try {
    let result = eval(output);
    document.getElementById("result").value = result;
    output = result;
  } catch (error) {
    alert("Invalid expression!");
    clearScreen();
  }
}

function backspace() {
  output = output.slice(0, -1);
  document.getElementById("result").value = output;
}
