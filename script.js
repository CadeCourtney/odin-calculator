let display = "", num1 = "", num2 = "", operand, result, func, nums = [], bo = false;
let equationScreen = document.getElementById("equation");
let enteredScreen = document.getElementById("entered");

let oneButton = document.getElementById("one");
oneButton.onclick = () => numberClick(1);
let twoButton = document.getElementById("two");
twoButton.onclick = () => numberClick(2);
let threeButton = document.getElementById("three");
threeButton.onclick = () => numberClick(3);
let fourButton = document.getElementById("four");
fourButton.onclick = () => numberClick(4);
let fiveButton = document.getElementById("five");
fiveButton.onclick = () => numberClick(5);
let sixButton = document.getElementById("six");
sixButton.onclick = () => numberClick(6);
let sevenButton = document.getElementById("seven");
sevenButton.onclick = () => numberClick(7);
let eightButton = document.getElementById("eight");
eightButton.onclick = () => numberClick(8);
let nineButton = document.getElementById("nine");
nineButton.onclick = () => numberClick(9);
let zeroButton = document.getElementById("zero");
zeroButton.onclick = () => numberClick(0);

let divButton = document.getElementById("divide");
divButton.onclick = () => operandClick("/");
let mulButton = document.getElementById("multiply");
mulButton.onclick = () => operandClick("*");
let minButton = document.getElementById("minus");
minButton.onclick = () => operandClick("-");
let plusButton = document.getElementById("plus");
plusButton.onclick = () => operandClick("+");
let decimalButton = document.getElementById("decimal");
decimalButton.onclick = () => operandClick(".");
let equalButton = document.getElementById("equal");
equalButton.onclick = () => operandClick("=");

let clearButton = document.getElementById("ac");
clearButton.onclick = () => clear();
let delButton = document.getElementById("del");
// delButton.onclick = () => ;
let negButton = document.getElementById("negative");
// negButton.onclick = () => ;

function numberClick(pressed) {
    if(enteredScreen.textContent == "0") {
        enteredScreen.textContent = "";
    }
    if(pressed == 1) {
        console.log('button 1 is pressed.');
        enteredScreen.textContent += "1";
    }
    else if(pressed == 2) {
        console.log('button 2 is pressed.');
        enteredScreen.textContent += "2";
    }
    else if(pressed == 3) {
        console.log('button 3 is pressed.');
        enteredScreen.textContent += "3";
    }
    else if(pressed == 4) {
        console.log('button 4 is pressed.');
        enteredScreen.textContent += "4";
    }
    else if(pressed == 5) {
        console.log('button 5 is pressed.');
        enteredScreen.textContent += "5";
    }
    else if(pressed == 6) {
        console.log('button 6 is pressed.');
        enteredScreen.textContent += "6";
    }
    else if(pressed == 7) {
        console.log('button 7 is pressed.');
        enteredScreen.textContent += "7";
    }
    else if(pressed == 8) {
        console.log('button 8 is pressed.');
        enteredScreen.textContent += "8";
    }
    else if(pressed == 9) {
        console.log('button 9 is pressed.');
        enteredScreen.textContent += "9";
    }
    else if(pressed == 0) {
        console.log('button 0 is pressed.');
        enteredScreen.textContent += "0";
    }
}

function operandClick(operation) {
    if(operand !== null) {
        operate();
    }
    num1 = enteredScreen.textContent;
    operand = operation;
    equationScreen.textContent = num1 + " " + operand;
    // enteredScreen.textContent = "0";
}

function operate() {
    if(operand == null) {
        return;
    }
    if (operand == '/' && enteredScreen.textContent == '0') {
        alert("You can't divide by 0!")
        return;
      }
    num2 = enteredScreen.textContent;
    console.log("num1: " + num1 + " " + "num2: " + num2);
    result = Math.round(arithmetic(operand, Number(num1), Number(num2)) * 1000) / 1000
    enteredScreen.textContent = result;
    equationScreen.textContent = num1 + " " + operand + " " + num2 + " =";
    // num1 = num2;
    operand = null
}

function add(a, b) {
    console.log("add");
    return a + b;
}

function subtract(a, b) {
    console.log("sub");
    return a - b;
}

function multiply(a, b) {
    console.log("mul");
    return a * b;
}

function divide(a, b) {
    console.log("div");
    if(b == 0) {
        return null;
    }
    return a / b;
}

function arithmetic(operator, a, b) {
    switch (operator) {
      case '+':
        return add(a, b)
      case '−':
        return substract(a, b)
      case '*':
        return multiply(a, b)
      case '/':
        return divide(a, b)
      default:
        return null
    }
  }