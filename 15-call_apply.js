// Call and Apply are the functions attached to function (keyword - function), this helps the functino in question to
// change the context (this, scope, execution context, scope object) - to return desired object values 
// both call and apply - immedidately execute, change the context and return value
// only defference between call and apply is - apply accepts parameters in the from of array

var User1 = {name : "Michael", age : 18, address : "Somewhere in Mauritius" }
var User2 = {name : "Mark", age: 19, address: "Somewher in France"}

function PrintInfo(heading) {
    // var name = "Ben Ma"
    // var age = "21"      //window.age
    // var address = "Somewhere in Italy" //window.address
    console.log(this) // this - is refered as dynamic context and is changeable as per the context setting 
    console.log(`
        ${this.heading}
        ${this.name}
        ${this.age}
        ${this.address}
        `
    )
}

name = "Ben Ma" //window.name
age = "21"      //window.age
address = "Somewhere in Italy" //window.address

PrintInfo("no contect set, default context is global"); // if we don't provide any context to the function it takes global object as its context: <window>

PrintInfo.call(User1, "Setting contect to User1") // PrintInfo wil have User1 as its context
PrintInfo.call(User2, "Setting contect to User2") // PrintInfo wil have User1 as its context

// UserInfo usrObj = new UserInfo();
// usrObj.PrintInfo(); //this


function PrintSessionInfo(heading,  session1, session2, session3, session4, session5,) {
    
    console.log(this) // this - is refered as dynamic context and is changeable as per the context setting 
    console.log(`
        ${this.heading}
        ${this.name}
        ${this.age}
        ${this.address}
        `
    )

    console.log(`
        Session Details are below:
        ${session1}
        ${session2}
        ${session3}
        ${session4}
        ${session5}
        `
    )
}


var sessionListSept = ["Context is USer1", "First", "Mernstack", "DSA", "JAVA", "AWS"]
var sessionListOct = ["Context is USer1", "Algo", "Mernstack", "DSA", "JAVA", "AWS"]


PrintSessionInfo.call(User1, "Context is USer1", "First", "Mernstack", "DSA", "JAVA", "AWS")

//Apply takes function parameters as array and applies the context same way we do with call
PrintSessionInfo.apply(User1, sessionListSept)
PrintSessionInfo.apply(User2, sessionListSept)

PrintSessionInfo.apply(null, sessionListSept)
PrintSessionInfo.apply(null, sessionListOct)



