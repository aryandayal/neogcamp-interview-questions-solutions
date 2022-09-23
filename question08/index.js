var input = document.getElementById("input")
var fetchBtn = document.getElementById("fetch-btn")
var output = document.getElementById("output")

function getFetchUrl(str) {
    return `https://lessonfourapi.a29omom.repl.co/translate/yoda.json?text=${str}`
}

fetchBtn.addEventListener("click", ()=> {
    fetch(getFetchUrl(input.value))
    .then((response) => response.json())
    .then((json) => (output.value.innerText = json.contents.translated))
    .catch("error")
})