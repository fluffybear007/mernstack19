// To work with file system we have fs - file system module present

const fs = require('fs') //fs - file system, from node framework

console.log('The synchronous operation works from here!!!')

// let fileData = fs.readFileSync('./class.js', 'utf-8'); //this should be a blocking
// console.log(fileData)
//console.log('The synchronous operation ends here!!!')

fs.readFile('./class.js', 'utf-8', (err,data)=>{ //error first callbacks

    fileData = data +err
    console.log(fileData)
    console.log(fileData)

})
console.log('The a-synchronous operation ends here!!!')

//Writing into a file using write stream

let userDetails = {
    name : "Tuan",
    age : 22,
    city : "somewhere on earth ",
    session : "MernStack"
}


