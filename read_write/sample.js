/*console.log("my first app!");

function test(){
    console.log("this is test")
}

setTimeout(function(){
    console.log("use timer method")
}, 1000) */

/*const name = require("./helper");
console.log(name);*/

const fs = require("fs");

const {readTXT, readJSON, writeTXT, writeJSON} = require("./helper")

console.log("start");

const request = process.argv[2]

if(request === "read"){
    readTXT();
    readJSON();

}else if(request === "write"){
    writeTXT();
    writeJSON();

}else{
    console.error("Enter the read or write arguments")
}
console.log("end")



