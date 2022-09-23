var input = document.getElementById("input")
        var red = document.getElementById("red")
        var green = document.getElementById("green")
        var blue = document.getElementById("blue")
        var output = document.getElementById("output")

        input.addEventListener("keyup", ()=> {
            output.innerText = input.value;
        })

        red.addEventListener("click", ()=> {
            output.style.color = "red";
        })

        green.addEventListener("click", ()=> {
            output.style.color = "green";
        })

        blue.addEventListener("click", ()=> {
            output.style.color = "blue";
        })