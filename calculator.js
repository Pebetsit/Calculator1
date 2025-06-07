// Boolean var. Determines if the next thing the user types should be on a new line
let newLine = true;  

// Event handler for when any digit button is pressed
function digitBtnPressed(button) {
    if (newLine == true) {
        document.getElementById("inputBox").value = button;
        newLine = false;
    } else {

        let currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + button;
    }
}

// Event handler for when the AC button is pressed
function btnACPressed () {
    document.getElementById("inputBox").value = 0;
    newLine = true;
}

// Event handler for when the operator buttons are pressed

let value1;
let currentOperator;

function operatorBtnPressed (operator) {
    currentOperator = operator;
    value1 = parseInt (document.getElementById("inputBox").value);
    newLine = true;
}

// Event handler for when the equal button is pressed

function equalBtnPressed() {
    let value2 = parseInt(document.getElementById("inputBox").value);
    let finalTotal;

    switch(currentOperator) {
        case "+":
            finalTotal = value1 + value2;
            break;

        case "-":
            finalTotal = value1 - value2;
            break;

        case "x":
            finalTotal = value1 * value2;
            break;

        case "/":
            finalTotal = value1 / value2;
            break;
    }
    document.getElementById("inputBox").value = finalTotal;
    newLine = true;
}