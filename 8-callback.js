//Callback - is a function which is passed as parameter in another function and will be executed to give 
//desired results upon being called

//the callback function keeps holding the scope of the variables or references used in the function

//callback function example 1
function PrintDetails(heading, dataObject){
    console.log(heading, dataObject)

}

var userObj ={
    User : "Anthony",
    Id : "Nilay"
}

//callBackFunc - the reusable function to do common implementation
function GetAccountDetails(callBackFunc, data){
    callBackFunc("Your account details are:", data);
}

GetAccountDetails(PrintDetails, userObj) // using the callback PrintDetails to print user data 




//callback function example 2
var productObj = {
    ProductName : "Iphone 29",
    Price : "$5000",
    Available : "Yes"
}

function GetProductDetails(callBackFunc, data){
    callBackFunc("The product details you are looking for are:", data);
}

GetProductDetails(PrintDetails,productObj )