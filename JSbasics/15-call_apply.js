// Call and Apply are the functions attached to function (keyword - function), this helps the functino in question to
// change the context (this, scope, execution context, scope object) - to return desired object values 
// both call and apply - immedidately execute, change the context and return value
// only defference between call and apply is - apply accepts parameters in the from of array


//1.
var User1 = {name : "Michael", age : 18, address : "Somewhere in Mauritius" }//object
var User2 = {name : "Mark", age: 19, address: "Somewher in France"}//object

function PrintInfo() {

    console.log(this) // this - is refered as dynamic context and is changeable as per the context setting 
    console.log(`
      
        ${this.name} 
        ${this.age}
        ${this.address}
        `
    )
}

// 1.executing the function, there is no varaible, object provide
//PrintInfo() 


//if we don't provide any context to the function it takes global object as its context

//instance means reference to the dynamic context of this class
// UserInfo usrObj = new UserInfo(); UserInfo have a limitation { }
// usrObj.PrintInfo(); //this  means useObj, in the class scope



 //2.
// name = "Ben Ma" //window.name  glocal variable no keyword 
// age = "21"      //window.age   
// address = "Somewhere in Italy" //window.address
// PrintInfo()
// PrintInfo("no contect set, default context is global"); // if we don't provide any context to the function it takes global object as its context: <window>

//3.
// PrintInfo.call(User1, "Setting contect to User1") // PrintInfo wil have User1 as its context
// PrintInfo.call(User2, "Setting contect to User2") // PrintInfo wil have User1 as its context



//4.
//  function PrintSessionInfo(heading,name,age, address) {
    
//     console.log(this) // this - is refered as dynamic context and is changeable as per the context setting 
//     console.log(`
//         ${this.heading}
//         ${this.name}
//         ${this.age}
//         ${this.address}
//         `
//     )
// }

// PrintSessionInfo.call(User1, "Context is USer1", "First", "Mernstack", "DSA", "JAVA", "AWS")


//5. 
function PrintSessionInfo2(heading,session1, session2, session3, session4, session5){
    console.log(this)
    console.log(
        `
        Session Details are below:
        ${session1}
        ${session2}
        ${session3}
        ${session4}
        ${session5}
        `
    )
}

// PrintSessionInfo2.call(User1, "Context is USer1", "First", "Mernstack", "DSA", "JAVA", "AWS")

//6. apply

var sessionListSept = ["Context is USer1", "First", "Mernstack", "DSA", "JAVA", "AWS1"]
var sessionListOct = ["Context is USer1", "Algo", "Mernstack", "DSA", "JAVA", "AWS2"]

//Apply takes function parameters as array and applies the context same way we do with call
// PrintSessionInfo2.apply(User1, sessionListSept)
// PrintSessionInfo2.apply(User2, sessionListOct)

PrintSessionInfo2.apply(null, sessionListSept)
PrintSessionInfo2.apply(null, sessionListOct)



