
let firstInput = null;
let secondInput = null;
let firstOperator = null;
let secondOperator = null;
let displayValue = 0;
let result = null;
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

function operate(operator){

}


function allClear(){
    firstInput = null
    secondInput = null
    firstOperator = null;
    secondOperator = null;
}

function clearDisplay(){
    display.textContent=0
}
let buttonsArray = document.querySelectorAll("button")
let display = document.querySelector("#display")

console.table(buttonsArray)
console.table(display)

function setDisplay(value){
    if(display.textContent == firstInput){
        display.textContent=value
    }else{
        display.textContent+=value
    }
}

function setOperator(operator){
    if(firstOperator==null && secondOperator==null){
        firstOperator=operator
    }else if(firstOperator!=null && secondOperator==null){
        secondOperator=operator
    }

}
function setInput(displayContent){
    if(firstInput==null){
        firstInput=displayContent
        console.log(firstInput)
    }else if(secondInput==null){
        secondInput=displayContent
        console.log(secondInput)
    }
}

buttonsArray.forEach(function(elem){
    elem.addEventListener("click", function(){
        if(elem.id == "zero"){
            setDisplay(0)
        }

        if(elem.id == "one"){
            setDisplay(1)
        }

        if(elem.id == "two"){
            display.textContent+=2
        }

        if(elem.id == "three"){
            display.textContent+=3
        }

        if(elem.id == "four"){
            display.textContent+=4
        }

        if(elem.id == "five"){
            display.textContent+=5
        }

        if(elem.id == "six"){
            display.textContent+=6
        }

        if(elem.id == "seven"){
            display.textContent+=7
        }

        if(elem.id == "eight"){
            display.textContent+=8
        }

        if(elem.id == "nine"){
            display.textContent+=9
        }

        if(elem.id == "equals"){

        }

        if(elem.id == "clear"){
            clear()
            display.textContent=0
        }

        if(elem.id == "plus"){
            setInput(display.textContent)
            setOperator("plus")
        }

        if(elem.id == "minus"){
            operator = "minus"
        }

        if(elem.id == "multiply"){
            operator = "multiply"
        }
        if(elem.id == "divide"){
            operator = "divide"
        }
    })
})