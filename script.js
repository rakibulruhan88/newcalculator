let numOne = document.getElementById("numOne");
let numTwe = document.getElementById("numTwo");
let result = document.getElementById("result");

function add () {
    let addition = parseInt(numOne.value)+parseInt(numTwo.value);
    result.innerHTML = addition;

}

function subs () {
    let subs = parseInt(numOne.value)-parseInt(numTwo.value);
    result.innerHTML = subs;

}

function division () {
    let division = parseInt(numOne.value)/parseInt(numTwo.value);
    result.innerHTML = division;
}


function multiply () {
    let multiply = parseInt(numOne.value)*parseInt(numTwe.value);
    result.innerText= multiply;
}

