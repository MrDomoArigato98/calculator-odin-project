
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



function afterOperation(result){
    firstPress = true;
    display.textContent = result
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
    if(firstOperator==null){
        console.log("first "+operator+" operator")
        firstOperator=operator
    }else if (firstOperator!=null){
        console.log("Second "+operator+" operator")
        secondOperator=operator
    }
}

function setInput(content){
    //If both first and 2nd operator are null
    if(firstInput==null){
        firstInput=content
    }else if(secondInput==null){
        secondInput=content
    }
}
function operate(){
    if(firstInput && secondInput && secondOperator==null){
     console.log('1st input, second input NO 2nd operator')
     switch (firstOperator) {
        case 'plus':
            result = add(Number(firstInput), Number(secondInput))
            afterOperation(result)
            break;
        case 'multiply':
            result = multiply(Number(firstInput),Number(secondInput))
            afterOperation(result)
        default:
            break;
     }
    }else if(firstInput && secondInput && secondOperator!=null){
        
    }
}

buttonsArray.forEach(function(elem){
    elem.addEventListener("click", function(){
        if(elem.classList.contains('number')){
            setDisplay(elem.value)   
        }

        if(elem.id == "equals"){
            setInput(display.textContent)
            operate()
        }

        if(elem.id == "plus"){
            firstPress=true
            console.log("PLUS. content of calculator is: "+ display.textContent)
            setInput(display.textContent)
            setOperator(elem.id)
            clearDisplay()
        }

        if(elem.id == "minus"){

        }

        if(elem.id == "multiply"){
            firstPress=true
            console.log("MULTIPLY. content of calculator is: "+ display.textContent)
            setInput(display.textContent)
            setOperator(elem.id)
            clearDisplay()
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