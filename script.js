//declare variables
let far = document.querySelector("#far")
let cel = document.querySelector("#cel")

let submit =  document.querySelector("#submit")

let fahrenheit = document.querySelector("#fahrenheit")
let celsius = document.querySelector("#celsius")


//create a function to calculate conversion 
let Calculate = (num1, degrees) => {
let answer = "";

    switch (degrees) {
        case 'F': 
        answer = `${(parseFloat(num1) * (9 / 5) + 32)} Celsius` ;
        break;             
        

        case 'C':
        answer = `${(parseFloat(num1) - 32) * (5 / 9)} Fahrenheit` ;
        break;

        default:
        answer = 'No valid operator was supplied'
        break
    }
        
    return answer
}



submit.addEventListener('click', (e) => {celsius.innerHTML = Calculate(far.value, cel.value); e.preventDefault()})