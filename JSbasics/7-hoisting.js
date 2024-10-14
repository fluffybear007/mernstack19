//Hoisting This is kind of a snapshot of all the javascript, functions, variables present in the whole file
//gets hoisted on top of file(so we call it partially compilled)
//Hoisting happens in two ways 
//1. Function Hoisting - A function gets hoisted with its complete definition and so we will be able to execute the same before definition
//2. Variabe Hoisting - Variable gets hoisted with default value of js(undefined)

//10 - variables will be hoisted with default value
//6 - functions will be hoisted with what it is defined
//the comment part also shows up when there is a failure


console.log(myVar) //undefined
// MyFunc("Hoisted")
MyFunc(myVar) //This is function hoisting undefined


function MyFunc(val){
    console.log("This is function hoisting", val)
}

var myVar = "I am a hoisted var"

console.log(myVar)


//function scope
var newVal = "Interesting"//global variable

function Random(params){
    console.log(newVal) //undefined(Yao- if declared within the function), Interesting(Ben - whewn no decaration inside the function)
    var newVal = "Very Int..."

    function VeryRandom(){
        console.log(newVal)

    }
}
Random()
//console.log(newVal) can't be accessed outside the function