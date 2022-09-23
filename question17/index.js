// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.

var output = document.getElementById("output")

var firstPerson = {
    name: "Ram",
    power: 2500,
    yuga: "Treta"
}

var secondPerson = {
    name: "Krishna",
    power: 2325,
    yuga: "Dwapar"
}

powerCheck()

function powerCheck () {
    var powerOfFirstPerson = firstPerson.name.length*35;
    var powerOfSecondPerson = secondPerson.name.length*35;

    var morePower;

    if(powerOfFirstPerson > powerOfSecondPerson) {
        morePower = `${firstPerson.name} has more power`;
    }

    else {
        morePower = `${secondPerson.name} has more power`;
    }

    return morePower;
}

output.innerText = powerCheck();