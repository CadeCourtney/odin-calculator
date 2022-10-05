let display = "", num1 = 0, num2 = 0, operand, result, func, stack = [];
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

function numberClick(pressed) {
    // display = "";
    // if(stack.length == 2) {
    //     display += stack.pop();
    //     display += stack.pop();
    // }
    if(pressed == 1) {
        console.log('button 1 is pressed.');
        display += "1";
        stack.push("1");
    }
    else if(pressed == 2) {
        console.log('button 2 is pressed.');
        display += "2";
        stack.push("2");
    }
    else if(pressed == 3) {
        console.log('button 3 is pressed.');
        display += "3";
        stack.push("3");
    }
    else if(pressed == 4) {
        console.log('button 4 is pressed.');
        display += "4";
        stack.push("4");
    }
    else if(pressed == 5) {
        console.log('button 5 is pressed.');
        display += "5";
        stack.push("5");
    }
    else if(pressed == 6) {
        console.log('button 6 is pressed.');
        display += "6";
        stack.push("6");
    }
    else if(pressed == 7) {
        console.log('button 7 is pressed.');
        display += "7";
        stack.push("7");
    }
    else if(pressed == 8) {
        console.log('button 8 is pressed.');
        display += "8";
        stack.push("8");
    }
    else if(pressed == 9) {
        console.log('button 9 is pressed.');
        display += "9";
        stack.push("9");
    }
    else if(pressed == 0) {
        console.log('button 0 is pressed.');
        display += "0";
        stack.push("0");
    }
    entered.textContent = display;
}

function operandClick(op) {
    entered.textContent = "0";
    console.log("symbol");
    // operand = op;
    stack.forEach(element => display += element);
    // display += " " + op + " ";
    display += " " + op;
    equationScreen.textContent = display;
    display = " ";
    stack.push(op);
    console.log(display);
}


function chooseOperation(op) {
    if(op == "+") {
        func = function add(a, b) {
            console.log("add");
            return a + b;
        };
    }
    if(op == "-") {
        func = function subtract(a, b) {
            console.log("sub");
            return a - b;
        }
    }
    if(op == "*") {
        func = function multiply(a, b) {
            console.log("mul");
            return a * b;
        }
    }
    if(op == "/") {
        func = function divide(a, b) {
            console.log("div");
            if(b == 0) {
        
            }
            return a / b;
        }
    }
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

    }
    return a / b;
}

