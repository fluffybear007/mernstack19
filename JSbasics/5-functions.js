//1. function rule
// A function is a block of code which gives behaviour we expect to do some job. 
// Area -> square(param), rectangle(length, width), circle(radius), Sphere()
// In JS functions are not nescessarily needs to be directly associated with class object, it can work independently.
// Functions are pure funcctions, a pure function will always return something, if a user doesn't return anything from 
// the function JS runtime will attach a default value (undefined)to it.can be demonstrated on the browser console
//

//keyword function -function name - (parameters)
function name(params) {
    //definition of the funciton
    //scope of the function
}

//Square.call(Area, )

//1.Named function
function Print(){
    console.log("Jimmy")
}

Print()// calling a function or function invocation

//2. Function Expression: a variable which can hold number, object... 
//also can be assigned a function defination to it. 

var myFunc = function mutiply(a,b){//Named function
    return a*b
}

console.log(myFunc(5,6))

var myFunc = function (a,b){//unNamed function
    return a*b
}

console.log(myFunc(5,6));

//3. IIFE - Immediately invocable function expression

(function (name, age){
    console.log("Name is registered as - " , name, age)
}) ("Anthony", 25)//parameter value

//4. Constructor Function - have properties associated with them and those can be initialized via constructor and
//be further used as classes

function User(name, age, address){
    this.name=name,
    this.age=age,
    this.address=address;

    this.getUserDetails= function(){
        console.log("User Information Entered is -", this, name, this.age, this.address)

    }
}

var userObj = new User("Ben", 20, "Somewhere on earth!!")
userObj.session = "MERNStack"; //adding new property(this is with the help of prototype)

//overriding the existing definition
userObj.getUserDetails =function(){
    console.log("User Information Entered is - ", this.name, this.age, this.address, this.session)

}

console.log(userObj.getUserDetails())
//console.log(User.prototype.getUserDetails())

var newUserObj = new User("New User", 20, "Somewhere on earth!!")
console.log(newUserObj.getUserDetails())

//5. nested functions

var val = 15
function A(a) {
    //console.log(b) //A can't access the lower value
    return function B(b){
        return function C(c){
            return function D(d){
                return a+b+c+d+val
            }
        }
    }
}

var objA  = A(5)
var objB =  objA(5)//B
var objC = objB(5)//C
var objD = objC(5)//D
console.log(objD)

//chain execution of nexted functions



var result = A(5)(5)(5)(5)
console.log(result)


//give me an example of each type of function


//定义函数，调用函数实现其功能
function Greet(name){
    console.log("Hello World!" + name)
}
Greet("yao")
Greet("Eric")
Greet("Aaron")
Greet("Vanessa")

//返回值
//JavaScript函数可以使用return语句将值返回给调用该函数的脚本。

//返回的值可以是任何类型，包括数组和对象。

//当JavaScript到达一条return语句时，该函数将停止执行。

//以下函数采用一个称为数字的参数，并返回乘以自身的参数（即数字）：
function square(a){
    return a*a;
}

var b = square(5) //to assign the return value to b 
console.log(b)
console.log(square(5))
square(5) //mo console.log
