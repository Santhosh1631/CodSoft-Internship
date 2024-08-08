function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendValue(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
    } catch (error) {
        display.value = "Error";
    }
}
