
let firstInput = null;
let secondInput = null;
let operator = null;
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
    if(operator=='plus'){
         return add(num1,num2)
    }else if (operator=='-'){
        return subtract(num1,num2)
    }else if (operator == '*'){
        return multiply(num1,num2)
    }else if (operator == '/'){
        return divide(num1,num2)
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

function clear(){
    firstInput=null
    secondInput=null
    operator=null
}
let buttonsArray = document.querySelectorAll("button")
let display = document.querySelector("#display")

console.table(buttonsArray)
console.table(display)

buttonsArray.forEach(function(elem){
    elem.addEventListener("click", function(){
        if(elem.id == "zero"){
            display.textContent+=0
        }

        if(elem.id == "one"){
            display.textContent+=1
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
            let answer = operate(firstInput,operator,secondInput)
            display.textContent = answer
            clear()
        }

        if(elem.id == "clear"){
            clear()
            display.textContent=0
        }

        if(elem.id == "plus"){
            operator = "plus"
            setInput(display.textContent)
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