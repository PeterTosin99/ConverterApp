let inputs = document.getElementById("inputs");

let converter = document.querySelector(".converter");

let result = document.querySelector(".result");


converter.addEventListener("click", function(){

    let answer = (inputs.value * 9/5) + 32

    result.textContent = answer;

}  
)
