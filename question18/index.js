// Create a CLI app which would detect fake news. This app will take news as input and then source. If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

var readlineSync = require('readline-sync')

readlineSync.question("enter yout news: ")

var source = readlineSync.question("enter your source (facebook, whatsapp, telegram, Others): ")

newsAuthenticate()

function newsAuthenticate () {
    var sourceInUpperCase = source.toUpperCase()
    if(sourceInUpperCase == "FACEBOOK" ||
    sourceInUpperCase == "WHATSAPP"||
    sourceInUpperCase == "telegram") {
        console.log("this is fake news")
    }
    else {
        console.log("this news is correct")
    }
}