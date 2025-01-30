
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

function setDisplay(value){
    if(displayValue==0){
        display.textContent=value
        firstPress=false
    }else display.textContent+=value
    
}


function operate(){
   
}

buttonsArray.forEach(function(elem){
    elem.addEventListener("click", function(){
        if(elem.classList.contains('number')){
            setDisplay(elem.value)
        }

        if(elem.id == "equals"){
        }

        if(elem.id == "plus"){
            
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
    display.textContent=0
    firstPress=true
}

function clearDisplay(){
    firstPress=true
    display.textContent=0
}