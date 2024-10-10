// Arrow Function is new way of writing functions in ES6, which has two important features.
//this is also termed as Fat arrow function b
// we don't need the function keyword to define the function
//1. Ease of writing - This is a lambda expression and we can write the whole function definition 
//using lambda expression
// function Add(a,b){
//     return a+b
// }

//if we have no comple logic which requires multiple lines then function can ve written in 1 line without return
// let AddArrow = (a,b)=>a+b

// console.log(Add(5,5))
// console.log(AddArrow(5,5))

// //multiple lines function
// let UserInfo = (name, age)=>{
//     return{
//         name,age
//     }
// }

// console.log(UserInfo("Random Person", 55))

// 2. This solves the problem of scope/Context without bind, by coping the context of immediate parent

let User = {
    name : "Hongbo",
    age : 21,
    address : "somewhere in north America",
    getDetails : function(){ //() =>{} what the difference should avoid using arrow function as parent of all other functions-sets context to global or empty
        console.log(`
            ${this.name}
            ${this.age}
            ${this.address}
            `)
        
    //         setTimeout(function(){
    //         console.log(`
    //             ${this.name}
    //             ${this.age}
    //             ${this.address}
    //             `)
    // }.bind(this),2000);

    let that = this; //this -which is parent context is copied into that variable
    
    setTimeout(function(){
       //instead of using dynamic context, we using copied context -context
        console.log(`
            ${that.name}
            ${that.age}
            ${that.address}
            `)
},2000);

// setTimeout(()=>{
//     //arrow function uses the context of immediate parent
//     console.log(`
//         console.log(this)
//         ${this.name}
//         ${this.age}
//         ${this.address}
//         `)
// },2000);
}
}   

User.getDetails()

//repeat and write an arrowfunction to print account information with return, without return 
// by creating a account object 