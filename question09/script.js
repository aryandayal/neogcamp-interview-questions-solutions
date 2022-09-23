var apiBtn = document.getElementById("api-btn")
var output = document.getElementById("output")

const apiURL = 'https://evilinsult.com/generate_insult.php'

apiBtn.addEventListener("click", ()=> {
    try{
        fetch(apiURL)
        .then((response)=> response.json())
        .then((data) => (output.innerText = data))
    }
    catch(error){
        output.innerText = error.message;
    }
})