// Promises - in javascript are the objects which hekp us making the decision on the basis of response object we get
// Promise acts as a wrapper to the actua task that we want to do
// This wrapper allows us to add statused and make our process asynchronous

//Example - Sign in process to the application 

// 1. AuthenticationAPI(username, password) => {sign-in and return the token(AuthToken)}
// 2. AuthorizationAPI(AuthToken) => {create the user sesiion return the userRole}
// 3. RedirectionAPI(AuthToken, userRole) => {the premiumum application services or normal services page }

// 1. CallBack - way

// SignInUser(AuthenticationAPICallback, SignUpUssrCaBack, AuthorizationAPI, RedirectionAPI, RedirectToPage)
// {

//     let response = AuthenticationAPICallback(username, password)
//     if (response == null){
//         SignUpUsrCallBack(userObjct)
//     } else{
//         let userRoleData = AuthorizationAPI (response.authToken)
//         if (response == null){
//            SignInUser(AuthenticationAPICallback, SignUpUssrCaBack, AuthorizationAPI, RedirectionAPI)
//         } else{
//             let nextPage = RedirectionAPI(response.authToken, userRoleData.userRole);
//             if (nextPage == null){
//                  SignInUser(AuthenticationAPICallback, SignUpUssrCaBack, AuthorizationAPI, RedirectionAPI)
//             } else{
//                  RedirectToPage(nextPage.pageLink);
//                 }
//         }      
//     }
// }


// 2. Promise Object - Resolve and reject are main callbacks of js-promise lib and it allows us tp add the statues as well as a class

let authPromise = new Promise((resolve, reject)=>{
    
    let authToken = AuthenticationAPI(username, password)
    if(authToken != null){
     
    resolve({
        tokencode : authToken.token,
        status : authToken.succes,
        msg : authToken.msg

    })

} else{

   reject({
     tokencode : "token failure" ,
     status : authToken.error,
     msg : authToken.msg
    })
}
})

setTimeout(()=>{
    resolve({
        authToken: "abcd",
        status : "success",
        msg : "Authentication Succsessfu at server"
})
},2000);


console.log(authPromise)

authPromise.then((data, error)=>{//result of successful promise -  resolved
    console.log(data)
    console.log(error)
 })
.catch((data, error)=> {//resut of failed promise - rejected
})
