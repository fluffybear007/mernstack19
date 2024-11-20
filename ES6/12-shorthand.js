//Shorthand : Removes the redundant variable, name used as key
//in a json object if the key name and the value for that key if we wish to read both are same them
//shorthand allows us to use just the variable to create complete object

let lion = "roar", birds = "chirp", cow = "moo", dogs = "bark";


let animalSound = {
    lion : lion, //key and value of teh variable are identical
    birds : birds,
    cow : cow,
    dogs : dogs
}

console.log(animalSound)

//when using the shorthand we can only use the variabe name that holds the value and it works by mapping itsef

let animalSoundES6 = {
    lion, // we can just use the variable and it will act as key and value both
    birds,
    cow, 
    dogs
}

console.log(animalSoundES6)




//To print with concatenation
//string + toString() of nect object => returns data type
console.log("Different animal sounds are " + animalSoundES6) //use + return data type

//if we explicitely concatenate values we must stringify before use
console.log("Different animal sounds are " + JSON.stringify(animalSoundES6))

//console.log -method is implementing JSON.stringigy() when we use object with, (comma)
console.log("Different animal sounds are ", animalSoundES6)

