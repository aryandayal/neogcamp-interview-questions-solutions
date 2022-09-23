// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.

var output = document.getElementById("output")

var firstData = {
    name: "Ram",
    age: 25,
    yuga: "Treta"
}

var secondData = {
    name: "Krishna",
    age: 31,
    yuga: "Dwapar"
}

greaterAge()

function greaterAge () {
    if(firstData.age > secondData.age) {
        output.innerText = `${firstData.name} has greater age then`;
    }
    else {
        output.innerText = `${secondData.name} has greater age then`;
    }
}