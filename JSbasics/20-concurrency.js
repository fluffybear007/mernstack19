//Javascript is single threaded, non-blocking, concurrent and high performance

//some code 
//call => server => (2 minutes) =>(callback to execute after 2 minutes)
//some other code 

//callbacks
//registered API's- SetTimeout, SetInterval, XHR(xml http request), registered callbacks(I/O operations to interact with)

//

console.log("Concurrent Execution Starts here") //#1
setTimeout(function(){
    console.log("First TimeOut code (delayed 1)") //#3

    setTimeout(function(){
        console.log("Inner TimeOut")  //#6
    },0)

},  1000);

setTimeout(function(){
    console.log("Second TimeOut code (delayed 2)") //#4

},1000);

setTimeout(function(){
    console.log("ThirdTimeOut code (delayed 3)") //#5
    
},1000);

console.log("Concurrent Execution Ends here") //#2

//orange block to event queue is called RETURN of callback， return of execution, completion of delay/setTimeout/API

//蓝色区stack是买面条不用等的，已经做好交钱后拿了就走。 
//带孩子排队买面条在橘色区等待，面条好了（等待时间1s到了）， 孩子（call back function）去event queen 等待，
//event queen 里孩子去stack 结账的顺序是先进的先去结账，等前一个结帐后， 后一个再去