
let firstInput = null;
let secondInput = null;
let firstOperator = null;
let secondOperator = null;
let displayValue = 0;
let result = null;
let buttonsArray = document.querySelectorAll("button")
let display = document.querySelector("#display")

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

function operate(){
}


function allClear(){
    firstInput = null
    secondInput = null
    firstOperator = null;
    secondOperator = null;
    result = null;
    display.textContent=0
}

function clearDisplay(){
    display.textContent=''
}

function setDisplay(value){
    display.textContent+=value
}

function setOperator(operator){
    if(firstOperator==null && secondOperator==null){
        firstOperator=operator

    }else if(firstOperator!=null && secondOperator==null){
        console.log("got second operator")
        secondOperator=operator
    }
}
function setInput(displayContent){

}

buttonsArray.forEach(function(elem){
    elem.addEventListener("click", function(){
        if(elem.classList.contains('operand')){
            console.log(elem.value)
        }

        if(elem.classList.contains('action')){
            console.log(elem.id)
        }
       
    })
})