
let num1;
let num2;
let operator;
//add = () =>{}
function add(num1, num2){
    return num1+num2
}

//subtract = () => {}
function subtract(num1,num2){
    return num1-num2
}

//multiply = () => {}
function multiply(num1,num2){
    return num1*num2
}

//divide = () => {}
function divide(num1, num2){
    return num1 / num2
}

function operate(num1,operator,num2){
    if(operator=='+'){
        return add(num1,num2)
    }else if (operator=='-'){
        return subtract(num1,num2)
    }else if (operator == '*'){
        return multiply(num1,num2)
    }else if (operator == '/'){
        return divide(num1,num2)
    }
}