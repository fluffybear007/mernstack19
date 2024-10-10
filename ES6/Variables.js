// To create a variable we only have var keyword in JS and which has some features like var hoisting which sometimes

// in ES6 we got two new variable types
// Let - is like var but doesn't support hoisting and has some more features
// Const - is there to create constant decarations to be used in application

//Const - are immu
//1. Declarations and Assignments - same name variable
// var - we can declare and re-declare asa many times as we want
// let/const - we can declare once but can not declare again

var newVar = "Somevalue"
var newVar = "Somevalue2"

let newlet = "SomeValue Let"
//let newlet = "SomeValue Let" //re-declaration not allowed

newLet = "Somevalue Let"; // re-assignment can be done

const newConst = "SomeValue Const"
//const newConst = "SomeValue Const" // re-declaration not allowed

newConst = "SomeValue Const 2" // re-assignment not allowed

const user = {}

user = {name : "Jugue" } //Assignment to constant variable. - not alloweds

//user.name ="Michale" // we are updating value via reference

console.log(user);



//2. Define and Assign value later
let newLet2;

newLet2 = "SomeValue New LET2"

//const - we need to Assign the value as soon as we define it

//const neweConst2; //not allowed -declaration must be initialized
//newConst2 = "SomeValue New LET2"

//3. var is functional scope, let and const are lexical <block> scope - {}

{
    var newVar = "Somevalue4" // var doesn't follow the bounfty og block {}, but is limited in function
    let newLet = "SomeValue Let"
    const newConst = "SomeValue Const"

    console.log(newLet);
    console.log(newConst);
}

console.log(newVar);
//console.log(newLet); //can't be accessed outside
//console.log(newConst); 

//4. Hoisting not present foe let or const
//console.log(newLet); //can't be accessed outside
//console.log(newConst); 

//let newLet = "SomeValue Let"
// const newConst="SomeValue Const"

//5. Evaluation of let and const are done before passing them to function,
//this is different in comparison to var where the value is evaluated at the time of function execution


var j= 1
for(j=1; j<5; j++){

    setTimeout(finction (jk)){
        //console.log(jk) //   
}.bind(j),3000);

console.log(j)

(function(params){
    setTime
})