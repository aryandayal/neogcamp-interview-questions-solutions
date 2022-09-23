var input = document.getElementById("input");
var increaseBtn = document.getElementById("increaseBtn");
var decreaseBtn = document.getElementById("decreaseBtn");
var output = document.getElementById("output");

input.addEventListener("keyup", ()=> {
    output.innerText = input.value;
})

increaseBtn.addEventListener("click", ()=> {
    var fontSize = window.getComputedStyle(output).fontSize
    var currentSize = parseFloat(fontSize)
    output.style.fontSize = `${currentSize + 2}px`;
})

decreaseBtn.addEventListener("click", ()=> {
    var fontSize = window.getComputedStyle(output).fontSize
    var currentSize = parseFloat(fontSize)
    output.style.fontSize = `${currentSize - 2}px`;
})