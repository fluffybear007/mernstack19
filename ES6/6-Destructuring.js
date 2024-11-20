// Instead of creating/initializing many variables if we assign into another object mainly array and json object
// this kind of mapping is termed as destructuring

//1. Array Destructuring - when we read the data from array and assign them to another variables

//a. Direct assignment in array to array 
// let sessionsList = ["AWS", "MERNStack", "JAVA"]

// let Session1 = sessionsList[0]
// let Session2 = sessionsList[1]
// let Session3 = sessionsList[2]

// let[Session1, Session2, Session3, Session4, Session5, Session6, Session7] = ["AWS", "MERNStack", "JAVA", "DSA", "Data Analytics", "AI-ML"] //sessionsList


//do read and map data for Session1,2,3 the same time,
//initialize 3 variables 3 times
// let[Session1, Session2, Session3] = sessionsList 

// console.log(Session1)
// console.log(Session2)
// console.log(Session3)

//b. we can use rest param to assign remaining array
// ... - represents rest operator and holds rest of the values in a seperate array
let[Session1, Session2, Session3, ...Session] = ["AWS", "MERNStack", "JAVA", "DSA", "SPRING", "CORE"]
 

console.log(Session1)
console.log(Session2)
console.log(Session3)
console.log(Session) //holds last three elements in an array

//c. Data swapping can be done easily - values are swapped with variables

let a = "New A", b = "New b";
[a,b] =[b,a]

console.log(a)
console.log(b)

//2. Object destructuring allows us to read data from objects without multiple initialization

//a. Single object destructuring 

let Assessment = {
    Name : "Jugue",
    Standard : "Professional",
    Marks : {
        Java : 10,
        Mernstack : 8,
        ES6 : 9
   }
}

// let Name = Assessment.Name;
// let MERNStack = Assessment.Marks.MERNStack

let {Name, Standard} =Assessment

console.log(Name)
console.log(Standard)

//b. Nested Destructuring - we read the data from the nested object

// e.g. - Reading marks from nested Mards object

// let {Name, Marks : {Java, Mernstack, DSA = 9.5}} = Assessment

// console.log(Name)
// console.log(Mernstack)
// console.log(DSA)

