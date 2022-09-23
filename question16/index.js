// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Write a function which takes two objects and return the person with more power.

var output = document.getElementById("output")

var firstData = {
    name: "Ram",
    power: 2500,
    yuga: "Treta"
}

var secondData = {
    name: "Krishna",
    power: 2325,
    yuga: "Dwapar"
}



const greaterPower = ()=> {
    if(firstData.power > secondData.power) {
        result = firstData.name;
    }
    else {
        result = secondData.name
    }

    return result;
}

output.innerText = greaterPower();

