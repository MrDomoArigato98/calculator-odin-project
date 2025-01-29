
let firstInput = null;
let secondInput = null;
let firstOperator = null;
let secondOperator = null;
let displayValue = 0;
let result = null;
let firstPress = true;
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
    if(firstInput && secondInput &! secondOperator){
     console.log('1st input, second input NO 2nd operator')
     switch (firstOperator) {
        case 'plus':
            result = add(Number(firstInput), Number(secondInput))
            displayValue = result
            break;
     
        default:
            break;
     }
    }
}


function allClear(){
    firstInput = null
    secondInput = null
    firstOperator = null;
    secondOperator = null;
    result = null;
    display.textContent=0
    firstPress=true
}

function clearDisplay(){
    firstPress=true
    display.textContent=0
}

function setDisplay(value){
    if(firstPress){
        display.textContent = value;
        firstPress=false
    }else{
        display.textContent += value
    }
}

function setOperator(operator){

}

function setInput(content){
    //If action not pressed
    if(firstOperator==null){
        console.log("First Operator Null and content: " +content)
        firstInput=content
    }
}

buttonsArray.forEach(function(elem){
    elem.addEventListener("click", function(){
        if(elem.classList.contains('number')){
            console.log("Clicked number: " + elem.value)
            setDisplay(elem.value)   
        }

        if(elem.id == "equals"){
            setInput(display.textContent)
            operate()
        }

        if(elem.id == "plus"){
            firstPress=true
            console.log("PLUS Operator, content of calculator is: "+ display.textContent)
            setOperator("plus")
            setInput(display.textContent)
            clearDisplay()
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