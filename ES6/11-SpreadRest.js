// Spread : is used to spread the elements of any object or array to be used one by one 
// It is done by using ...(spread the object)

// let nameList = ["Yao1", "Yao2", "Yao3", "Yao4"]

// console.log(nameList[0])
// console.log(nameList[1])

// console.log(...nameList)

let user = {
    id : 101,
    name : "cat",
    userType : "paid",
    allowedReview : true,
    balance : "$1000"
}

let address = {
    id : 101,
    homeAddress : "Somewhere in colorado",
    officeAddress : "Somewhere in Atlanta"
}

// let delivery = Object.assign({},user, address)
let delivery = {...user, ...address}
address.available = "5pm" //Preserves the immutability
console.log(delivery)

delivery = {...user, ...address}
console.log(delivery)

//Rest - parameter and operator : any array data can be passed as rest parameter in any function, but it should be 
// the last parameter, also when we try to assign values to rest operator it should be the last literal

let add = (a=0, b=0,c=0,d=0,e=0) => a+b+c+d+e

let numberList = [1,2,3,4,5,6]
console.log(add(...numberList)) //<usage of spread operator>

//we can use spread parameter instead for dynamic count of params

let addMax = function (...restNumbereList){ //rest : param can accept any number of params 
    let sum = 0
    sum = restNumberList.reduce((prevNum, currNum)=>{

    },0)

}