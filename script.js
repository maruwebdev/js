
const Input = document.getElementById('numberInput');
const addButton = document.getElementById('addButton');
const subButton = document.getElementById('subButton')
const multiplyButton = document.getElementById('multiplyButton')
const divideButton = document.getElementById('divideButton')
const modButton = document.getElementById('modButton')
const Submit = document.getElementById('submitButton');
const Result = document.getElementById('result');
const Numbers = document.querySelectorAll('.number-button');
const Paren = document.querySelectorAll('.paren')
const Reset = document.getElementById('resetButton')

const Operators = [addButton, multiplyButton, subButton, divideButton, modButton]

Operators.forEach((button) =>{
    button.addEventListener('click', () =>{
        if(Input.value !== ''){
            Input.value += button.textContent
        }
    })
})

Paren.forEach((button)=>{
    button.addEventListener('click', ()=>{
        Input.value += button.textContent
    })
})

Numbers.forEach((button) =>{
    button.addEventListener('click', () =>{
        
            Input.value += button.textContent

    })
})

Submit.addEventListener('click', () =>{
    const expression = Input.value.replace(/x/gi, '*')
    const result = eval(expression)
    Result.textContent = result
})

Reset.addEventListener('click',() =>{
    Result.textContent = ''
    Input.value = ''
})
