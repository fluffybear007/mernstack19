//1. var define rules
//2. expression and operator rules
//3. hoisting rule





//Javascript is a interpreted language <no compile time error, line by line execution and resutls on the fly>
//Hoisting -feature allows functions to get executed even before their declaration, 
//Due to hoisting feature, JS is also said to be a partially compiled language.

//single line ctrl+/
/*
multiline comments
*/


//case sensitive 
var name ="some name"
var Name="Some More Name"
console.log(name, Name)

//we can use special chars($,_)
//var name$, _Name
//var New Name, NewName@, #newName//(space and other special chars are not allowed except *(for generator funcction) )

//this can be alphanumeric, literal name should not be starting with number
var name1//, 1name(not allowed)

//keywards - a
//var(classical or vanilla js)
//let and const(from ES6)

//expressions and operators
//&& - and, || - or, ! -not, =, ==, ===, ? (ternary operator)
//>, <. >=, <=

var myName = "Test"
var age= "20" //type is string 

// == : compares the value 
// === : compares the type and the value both

if(myName == "test" && age ===s20){
    console.log("Your name and age is correct")
}else{
    console.log("Your name/age is incorrect")
}

//conditon ? the result if conditon is true : the result if condition is false
age != 20 ? console.log("Valid voter") : console.log("InValid voter")

// switch(key)

// while(condition){

// }

// for(let index=0; index<Array.length; index++){
//     const element =array[index];
// }

// array.forEach(element =>{

// });



console.log(sum(6,10))// --hoisting

function sum(a,b){
    
    return a + b
}

var x = 21==="21"
console.log(x)
console.log(typeof x)

// dynamic type change (type casting), assignment

x = "Ben Ma"
console.log(x)
console.log(typeof x)


console.log(sum(6,10))