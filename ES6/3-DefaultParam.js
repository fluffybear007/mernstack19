// ES6 allows us to initalize the parameter at the time of function definition
//

function Addition(val1 = 0, val2 = 0, val3 = 0 ){
    console.log(val3)
    return val1 + val2 + val3
}

console.log(Addition(1,2,3))
console.log(Addition(1,2)) //NaN -Not A Number

//create a student information functional and set some values as defaut
