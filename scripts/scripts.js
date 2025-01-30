
let firstInput = null;
let secondInput = null;
let firstOperator = null;
let secondOperator = null;
let displayValue = 0;
let result = null;
let isPressed = false;
let buttonsArray = document.querySelectorAll("button")
let display = document.querySelector("#display")


//add = () =>{}

function operate(num1,num2, operator){
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

function setDisplay(value){

}

function setOperator(operator){

}

function setEquals(){
}

function operate(){

}

buttonsArray.forEach(function(elem){
    elem.addEventListener("click", function(){
        if(elem.classList.contains('number')){
            setDisplay(elem.value)
        }

        if(elem.id == "equals"){
            setEquals()
            operate()
        }

        if(elem.id == "plus"){
            setOperator("+")
        }

        if(elem.id == "minus"){

        }

        if(elem.id == "multiply"){

        }
        
        if(elem.id == "divide"){
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