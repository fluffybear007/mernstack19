// async and await - to give us a synchronised behabiour of executino though executing asynchronously
// if we create promise object inside async it will take it or if we don't create promise then it will wrap a promise object
// async and await : //Async : A way to have multi - threading in javascript like other object oriented programing language

//150 request/second - main thread <>
//120-139 req/sec
//sub threads - 
//50 req/sec - async operation, await to return back to execution context
//50 req/sec - async operation, await to return back to execution context
//50 req/sec - async operation, await to return back to execution context

function resolveAfter25Seconds(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reso
        })
    }

    )
}




