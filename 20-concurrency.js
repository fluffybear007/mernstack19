//Javascript is single threaded, non-blocking, concurrent and high performance

//some code 
//call => server => (2 minutes) =>(callback to execute after 2 minutes)
//some other code 

//callbacks
//registered API's- SetTimeout, SetInterval, XHR(xml http request), registered callbacks(I/O operations to interact with)

//

console.log("Concurrent Execution Starts here")
setTimeout(function(){
    console.log("First TimeOut code (delayed 1)")

    setTimeout(function(){
        console.log("Inner TimeOut")
    },0)

},  1000);

setTimeout(function(){
    console.log("Second TimeOut code (delayed 2)")

},1000);

setTimeout(function(){
    console.log("ThirdTimeOut code (delayed 3)")
    
},1000);

console.log("Concurrent Execution Ends here")

//orange block to event queue is called execution of callback.