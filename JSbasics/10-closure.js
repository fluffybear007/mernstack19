//oops
//Polymorphism - overloading(over-writing) and Overriding (by inheriting in constructor function we can override)
//Inheritance - is possible, prototype { an object that links the child object to base function} : _proto_
//Abstractions - Abstract function/class are not present but function can do abstract implementation
//Encapsulation - we limit the acccess of properties and fields via access modifiers, we don't have ant keywords for this 
                  //we can manipulate the function to restrict the access of function variables

//Closure - A paradigm when a function contains another function and has some fields kept as private, some as public 
//by returning them through child function
//function returning another function is closure example

//闭包是一个函数以及其捆绑的周边环境状态（lexical enviroment - 词法环境）的饮用的组合
//闭包让开发者可以从内部函数访问外部函数的作用域。
//闭包会随着函数的创建而被同时创建


// function Accounts(name, age, balance, type){
//     //Private scope
//     var AccName = name
//     var AccHolderAge = age
//     var AccBalance = balance
//     var AccType = type
//     var password = "xyz" //private 
//     var AccPin = "9682"  // private
    

//     var accountDetails = function (name, pwd) {
//         //things returned from this function are public 
//         if (pwd == password){
//             return {//for accountDetails function
//             //short hand from ES6, if variable name (from which we read the value) and key refers to same name
          
//                 AccName,   //"AccName" : AccName 
//                 AccHolderAge,
//                 AccBalance,
//                 AccType
//             }
//         }else {
//             return "Password is incorrect!!" //for accountDetails function
//         }
//     }
//     //the entites returned via function
//     return accountDetails;//for Accounts function
// }


// //accObj is a global variable, if you created a lot of reference for gloabal variable, it may takes lots of unused memory.
// //accObj this object will be part of the execution scope
// var accObj = Accounts("Mark", 21, "$200000", "Credit")//找 Accounts 的 return value => accountDetails()


// console.log(accObj("Marl", "xyz"))//accObj return accountDetails, then you get accountDetais("Mark", "xyz")
// //console.log(accountDetails("Mark", "xyz")

// console.log(accObj( "xxx"))
// console.log(accObj)


// for(let index=0; index<1000000; index++){
//     //const element =array[index];
//     console.log(index)
// }

// console.log("LOOP execute 1000000 times")

// console.log(accObj("", "xyz"))
// console.log(accObj("","123"))


//function must has return value, so it can be used console.log

// function Accounts(name, age, balance, type){
//     return{
//     //Private scope
//      AccName : name,
//      AccHolderAge : age,
//      AccBalance : balance,
//      AccType : type,
//      password : "xyz" ,//private 
//      AccPin : "9682"  // private
//     }
// }

// console.log(Accounts("Mark", 21, "$200000", "Credit"))

// let counter = 5;

// // Function to increment counter
// function add() {
//   let counter = 0; 
//   counter += 1;
//   return counter
// }

// // Call add() 3 times
// console.log(add());
// console.log(add());
// console.log(add());
// // add();
// // add();
// // add();


var n=999;
function f1(){
  return n*n
  
}
console.log(f1()) // 999