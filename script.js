
function appendValue(value) {
  document.getElementById("display").value += value;
}


function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  try {
    const result = eval(display.value);
    if (result === undefined || result === null) {
      display.value = "";
    } else {
      display.value = result;
    }
  } catch (e) {
    alert("Invalid input");
  }
}
