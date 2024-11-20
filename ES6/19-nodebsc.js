console.log("Packages are nothing but the utility modules")

let {log} = require('console'); //using the alreday installed package/module

log("This we are printing by using console module!!!")

log(__dirname) // gives the absoute path of the directory our file is in
log(__filename) // gives the absolute path of the directory our file is in with current file name


let {test} = require('./node')// we need to run the file so 
//accessing global data
log(global.connectionString)

// we can pass data via terminal using std.out and std.in
 
