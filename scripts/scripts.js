
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
}

function clearDisplay(){
    display.textContent=''
}


console.table(buttonsArray)
console.table(display)

function setDisplay(value){
    display.textContent = displayValue;
}
setDisplay(display)

function setOperator(operator){

    firstOperator = operator
    // if(firstOperator==null && secondOperator==null){
    //     firstOperator=operator

    // }else if(firstOperator!=null && secondOperator==null){
    //     console.log("got second operator")
    //     secondOperator=operator
    // }

}
function setInput(displayContent){
    if(firstInput==null){
        firstInput=displayContent
        console.log("Set first input: "+firstInput)
    }else if(secondInput==null){
        console.log("Set second input: "+secondInput)
        secondInput=displayContent
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
            console.log(display.textContent)
            setInput(display.textContent)
            setOperator("plus")
            clearDisplay()
        }

        if(elem.id == "minus"){

        }

        if(elem.id == "multiply"){
        }
        if(elem.id == "divide"){
        }
        if(elem.id == "clear"){
            allClear()
            display.textContent=0
        }
    })
})