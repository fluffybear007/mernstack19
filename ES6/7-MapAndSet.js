// Map : is the -data stucture created to store data in the form of key value pair.
// Strong Map - When our keys are of string type or alphanumeric type
// Weak Map - this allows us to create keys such as numbers, functions, objects etc
// There are several methods, properties attached to map to validate and access the values present against key


// //[{key : "value"}]
let myMap = new Map();
myMap.set("UserName", "Anthony")
console.log(myMap.size)
console.log(myMap.entries())


//creating a weak map
let keyString = 'string', keyObj = {}, keyFunc = function() {}, keyNum = 2000; // keyString and 'string' are 2 different variables.
myMap.set(keyString, "String is key for this!!") // assign the value to the object which the keyString points to. 
myMap.set({}, "Object is key for this!!")//assign "Object is key for this" to a new {},
myMap.set(keyFunc, "Function is key for this!!")
myMap.set(keyNum, "Number is key for this!!")
let newObject = {};
// console.log(myMap.size)
// //console.log(myMap.entries())

console.log(myMap.get(2000)) //Number is key for this!!
console.log(myMap.get(keyString)) 
console.log(myMap.get("string")) 

// {} create another empty object in the new heap position, not the same one as the declared above,
// the above one is also an empty object but refer to a reference variable keyObj, which later assign the value -- "Object is key for this!!"to it.
console.log(myMap.get({}))  // underfined : object is refered by reference variable not a value type, for each 
//object a separate memory allocated on heap

console.log(myMap.get(keyObj)) //can only access via same reference variable
// myMap.delete(keyNum)
console.log(myMap.entries())  

console.log(myMap.has(keyString))  // true -falses
console.log(myMap.keys()) // list of all keys-----[Map Iterator] { 'UserName', 'a string', {}, [Function: keyFunc] }

myMap.clear(); // removes all data
console.log(myMap.entries())  



// Set : is the data structure which helps us create unique data without many comparisons

// let TraineeList = []
// TraineeList.push("Duncan")
//before adding - Same user name we need to check for each time if its already present or not

let TraineeList = new Set(["Silvia", "Afroj", "Yao", "Mark", "Nilay"])

TraineeList.add("Yao")
console.log(TraineeList.entries())

TraineeList.add("Sierra")
console.log(TraineeList.entries())
console.log(TraineeList.size)

TraineeList.add("Ben")
console.log(TraineeList.values())
console.log(TraineeList.size)

//Createt two examples of your own choice to make a map and a weak map
// and a list of unique names of 10 states of your favorate country you wish to visit on world tour

let mapObj= new Map()

mapObj.set(1, "yao")