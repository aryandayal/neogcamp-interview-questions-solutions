var input = document.getElementById("input")
var fetchBtn = document.getElementById("fetch-btn")
var output = document.getElementById("output")


fetchBtn.addEventListener("click", ()=> {

    var apiURL = `"${input.value}"`
    
        fetch(apiURL)
        .then((response) => {
            if(response.status == 404) {
                console.log("page not found")
            }

            else if(response.status == 401){
                console.log("user are not login")
            }
        })
})