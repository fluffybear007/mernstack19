// Create two examples 
// Bind : is the function present with each function which is used to change the context or hold the context
// for the time function gets executed
// in other words this is similar to call and apply but doesn't execute the function immedidately.
// however becomes part of the same function by holding the new context supplied - Same way as parents or v


for(var index =0; index < 5; index ++){
    //setTimeout excecutes the call back function passed as first parameter 
    //after the milliseconds passed as second param - for one time only
    setTimeout(function(){
        console.log(index)//setTimeout excecutes the call back function passed as first parameter 

},1000);
}

console.log(index)

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

        setTimeout(function(){
            console.log(this)
            console.log(
                `
                ${this.name}
                ${this.age}
                ${this.address}
                `
            )
    
    },2000);
    }

}
User.GetUserDetails()