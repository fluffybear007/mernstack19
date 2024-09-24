//oops
//Polymorphism - overloading(over-writing) and Overriding (by inheriting in constructor function we can override)
//Inheritance - is possible, prototype { an object that links the child object to base function} : _proto_
//Abstractions - Abstract function/class are not present but function can do abstract implementation
//Encapsulation - 
//Closure - A paradigm when a function contains another function and has some fields kept asa private, some as public 
//by returning them through child function
//function returning another function is closure example

function Accounts(name, age, balance, type){
    //Private scope
    var AccName = name
    var AccHolderAge = age
    var AccBalance = balance
    var AccType = type
    var password = "xyz" //private 
    var AccPin = "9682"  // private
    //

    var accountDetails = function (name, pwd) {
        //things returned from this function are public 
        if (pwd == password){
            return {
            //short hand from ES6, if variable name (from which we read the value) and key refers to same name
          
                AccName,   //"AccName" : AccName 
                AccHolderAge,
                AccBalance,
                AccType
            }
        }else {
            return "Password is incorrect!!"
        }
    }
    //the entites returned via function
    return accountDetails;
}

var accObj = Accounts("Mark", 21, "$200000", "Credit")

// console.log(accObj("Mark", "xyz"))

for(let index=0; index<1000000; index++){
    //const element =array[index];
    console.log(index)
}

console.log("LOOP execute 1000000 times")

console.log(accObj("", "xyz"))
console.log(accObj("","123"))