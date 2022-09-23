var input = document.getElementById('input')
var h1 = document.getElementById('h1')
var h2 = document.getElementById('h2')
var h3 = document.getElementById('h3')
var output = document.getElementById('output')

input.addEventListener("keyup", ()=> {
    output.innerHTML = input.value;
})
h1.addEventListener("click", ()=> {
    output.innerHTML = `<h1>${input.value}</h1>`;
})

h2.addEventListener("click", ()=> {
    output.innerHTML = `<h2>${input.value}</h2>`;
})

h3.addEventListener("click", ()=> {
    output.innerHTML = `<h3>${input.value}</h3>`;
})