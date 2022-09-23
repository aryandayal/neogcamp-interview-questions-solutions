var input = document.getElementById("input")
var output = document.getElementById("output")

input.addEventListener("keyup", ()=> {
    if(input.value.length < 10) {
        output.innerText = "error"
        input.style.backgroundColor = "red"
    }
    else {
        output.innerText = "success"
        input.style.backgroundColor = "green"
    }
})