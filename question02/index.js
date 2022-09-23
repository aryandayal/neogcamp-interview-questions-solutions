var input1 = document.querySelector("#input1");
        var input2 = document.querySelector("#input2");
        var addBtn = document.querySelector("#addBtn");
        var subBtn = document.querySelector("#subBtn");
        var multiplyBtn = document.querySelector("#multiplyBtn");
        var divideBtn = document.querySelector("#divideBtn")
        var output = document.querySelector("#output");

        addBtn.addEventListener("click", ()=> {
            if(isNaN(input1.value)|| isNaN(input2.value) ) {
            output.innerText = "enter valid number";
            output.style.color = 'red';
            }
            else {
            output.innerText = parseInt(input1.value)+parseInt(input2.value);
            output.style.color = 'green';
            }
        })

        subBtn.addEventListener("click", ()=> {
            if(isNaN(input1.value)|| isNaN(input2.value) ) {
            output.innerText = "enter valid number";
            output.style.color = 'red';
            }
            else {
            output.innerText = parseInt(input1.value)-parseInt(input2.value);
            output.style.color = 'green';
            }
        })

        multiplyBtn.addEventListener("click", ()=> {
            if(isNaN(input1.value)|| isNaN(input2.value) ) {
            output.innerText = "enter valid number";
            output.style.color = 'red';
            }
            else {
            output.innerText = parseInt(input1.value)*parseInt(input2.value);
            output.style.color = 'green';
            }
        })

        divideBtn.addEventListener("click", ()=> {
            if(isNaN(input1.value)|| isNaN(input2.value) ) {
            output.innerText = "enter valid number";
            output.style.color = 'red';
            }
            else {
            output.innerText = parseInt(input1.value)/parseInt(input2.value);
            output.style.color = 'green';
            }
        })