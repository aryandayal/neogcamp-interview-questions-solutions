var input = document.getElementById("input")
var btn = document.getElementById("btn")
var output = document.getElementById("output")

btn.addEventListener("click", ()=> {
    if(input.value.length < 10) {
        output.innerText = "error"
    }
    else {
        output.innerText = "success"
    }
})