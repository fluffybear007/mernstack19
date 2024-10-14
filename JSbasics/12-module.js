//Every file in JS is known as module
//this can cantain one lien or thousand of lien of codes

//we can access data from another fie by using require, module

//when we require from a file it makes available all the modues exported from that file/module

var User3 = require("./11-literals") //normalized path

console.log(User3.getUserDetails())

var {User, User2, User3} = require("./11-literals")

console.log(User)
console.log(User2)
console.log(User4) //imported object name should match to the exported one in case of multiple exports
console.log(User3.getUserDetails())