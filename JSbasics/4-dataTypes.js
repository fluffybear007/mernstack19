//1. data type rules  


// Data Types: are the types of data we can store in the language, e.g. boolean, string, number etc
// 6 valid types present in JS

// Primitive Type - stored as value directly on stack
// boolean
// number
// null -object
// undefined
// string


// Non Pirmitive Type - store as reference on the heap 
// object -{}

// ES6 - symbol type

console.log(x) //reference error: x is not defined 
console.log(typeof x) // reference error

console.log(newVar) // user object
console.log(typeof newVar)

newVar = null

console.log(newVar) // legitimate value
console.log(typeof newVar) // object


var newVar  = 1000

console.log(newVar)
console.log(typeof newVar)

var newVar  = 1000.0002

console.log(newVar)
console.log(typeof newVar)


var symbol_1 