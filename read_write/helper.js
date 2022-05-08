const name = "MIKE";

const fs = require("fs");

//simple read method
const readTXT = function(){
    fs.readFile("./sample.txt", "utf8" , (err, data) => {
        console.log(data)
    }); 
}

//JSON read method
const readJSON = function(){
    fs.readFile("./sample.json", "utf8" , (err, data) => {
        const person = JSON.parse(data)
        console.log(person.name)
    }); 
}


//Simple write method
const writeTXT = function(){
    fs.writeFile("sample.txt","Hello world" , function(){
        console.log("End of output")
    });
}

//JSON style
const person = {
    name : "James",
    age : 30,
}

//method to output JSON style
const writeJSON = function(){
    fs.writeFile("sample.json", JSON.stringify(person), function(){
        console.log("End of output")
    });
}

module.exports = {
    name : name,
    readTXT : readTXT,
    readJSON : readJSON,
    writeTXT : writeTXT,
    writeJSON : writeJSON,
}