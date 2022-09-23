// <!-- Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well? -->


const readlineSync = require("readline-sync")

var nameArray = [];
var unitTestMarksArray = [];
var preFinalMarksArray = [];
var finalMarksArray = [];
var totalMarksArray = [];
var averageMarksArray = [];

for(let i=0; i<5; i++) {
    console.log("enter your name: ")
    var name = readlineSync.question("name: ")
    nameArray.push(name)

    var unitTestMarks = readlineSync.question("unit test marks: ")
    unitTestMarksArray.push(unitTestMarks)

    var preFinalMarks = readlineSync.question("prefinal marks: ")
    preFinalMarksArray.push(preFinalMarks)

    var finalMarks = readlineSync.question("final marks: ")
    finalMarksArray.push(finalMarks)

    console.log("....")
}

    //result

    for(let i=0; i<5; i++) {
        var totalMarks = (parseInt(unitTestMarksArray[i])+ parseInt(preFinalMarksArray[i])+ parseInt(finalMarksArray[i]))
        totalMarksArray.push(totalMarks)

        var avg = totalMarks/3;

        averageMarksArray.push(avg)
    }

        var [student1, student2, student3, student4, student5] = totalMarksArray;

        var highestMarks = (Math.max(student1, student2, student3, student4, student5))

        var indexOfHighestMarks = totalMarksArray.indexOf(highestMarks)

        console.log(nameArray[indexOfHighestMarks]+ ": got highest marks")

        console.log("and average of this student is:" + averageMarksArray[indexOfHighestMarks])

