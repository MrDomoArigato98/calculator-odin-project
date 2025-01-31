
let firstInput = null;
let secondInput = null;
let firstOperator = null;
let secondOperator = null;
let displayValue = 0;
let result = null;
let isPressed = false;
let buttonsArray = document.querySelectorAll("button")



//add = () =>{}

function operate(num1,num2, operator){
    Number(num1)
    Number(num2)
    switch (operator) {
        case '+':
            return num1+num2
            break;
        case '*':
            return num1-num2
            break;
        case '-':
            return num1-num2
            break;
        case '/':
            if(num2==0){
                return "wtf"
                break;
            }else{
                return (num1/num2)
                break;
            }
        }
}


function setInput(number){
    //If the first operator isn't set (Basically first calculation).
    if(firstOperator===null){
        if(displayValue===0 || displayValue ==='0'){
            displayValue = number;
        }else if(displayValue == firstInput){
            displayValue = number
        }else{
            displayValue+=number
        }
    }else {
        if(displayValue===firstInput){
            displayValue = number
        }else{
            displayValue+=number
        }
    }
}

function setOperator(operator){
    if(firstOperator!=null && secondOperator === null){
        secondOperator = operator
        secondInput = displayValue
        result = operate(firstInput,secondInput,firstOperator)
        displayValue = result
        firstInput = displayValue
        result = null
    }else if(firstInput = null && secondOperator != null){

    
        secondInput = displayValue
        result = operate(firstInput,secondInput,firstOperator)
        secondOperator = operator
        displayValue = result
        firstInput = displayValue
        result = null

    }else {
        firstOperator = operator
        firstInput = displayValue
    }
}
function setDisplay(){
    const display = document.querySelector("#display")
    display.textContent = displayValue;
    if(displayValue.length>9){
    }
}
setDisplay();

buttonsArray.forEach(function(elem){
    elem.addEventListener("click", function(){
        if(elem.classList.contains('number')){
            setInput(elem.value)
            setDisplay();
        }

        if(elem.id == "equals"){
            setEquals()
            operate()
        }

        if(elem.id == "plus"){
            setOperator("+")
        }

        if(elem.id == "minus"){
            setOperator("-")
        }

        if(elem.id == "multiply"){
            setOperator("*")
        }
        
        if(elem.id == "divide"){
            setOperator("/")
        }

        if(elem.id == "del"){
            clearDisplay()
        }

        if(elem.id == "clear"){
            allClear()
            display.textContent=0
        }
    })
})



function allClear(){
    firstInput = null
    secondInput = null
    firstOperator = null;
    secondOperator = null;
    result = null;
    displayValue = 0
}

function clearDisplay(){
    display.textContent=0
    displayValue = 0
}