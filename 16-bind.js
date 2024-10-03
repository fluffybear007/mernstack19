// Create two examples 
// bind : is the function present with each function which is used to change the context or hold the context
// for the time function gets executed
// in other words this is similar to call and apply but doesn't execute the function immedidately.
// however becomes part of the same function by holding the new context supplied 
// example: Same way as parents or caetakers hold the money and give it to us when we need

// var index =0
// for(var index =0; index < 5; index ++){
//     //setTimeout is registered API, it set the function(parameter) every 2s to execute, only one function to execute with timer
//     //setTimeout excecutes the call back function passed as first parameter 
//     //after the milliseconds passed as second param - for one time only
//     //setTimeout execute 5 times 
//     setTimeout(function(){
//         console.log(index)//function inside is callback function of setTimeout.
//     },1000)
// }

// console.log(index)

var User = {
    name : "Yao",
    age : 18,
    address : "Somewhere in China",
    GetUserDetails : function () {
        console.log(this)
        console.log(
            `
            ${this.name}
            ${this.age}
            ${this.address}
            `
        )
        //there is no context for function, so it use setTimeout context--Timeout object
        setTimeout(function(){
            console.log(this)
            console.log(
                `
                ${this.name}
                ${this.age}
                ${this.address}
                `)
            //return "Yao"
    }.bind(User),2000);
    }
}
User.GetUserDetails()