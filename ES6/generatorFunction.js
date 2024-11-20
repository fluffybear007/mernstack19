// Generator - functions are special type of functions which can be invoked once and would yiedl the value
// for as many times as we need
// return - marks the end of execution
// yield - is used to get the data on each function.next() call

function *name(params){
    yield "First Yield"

    yield "Second Yield"

    yield "Third Yield"

    return 
}

console.log(name.next())
console.log(name.next())
console.log(name.next())
console.log(name.next())
