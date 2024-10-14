// Class - has been added in ES6 as a specia and upgrade function to give us feature similar to
// other class based programming languages

// class keyword is used to create class and we can create associated methods as we did in constructor function <without>

class Area{ // scope of the class {<------>}
    
    //constructor is used to initalized the properties
    constructor(length, breadth){
        this.length = length
        this.breadth = breadth
    }

    AreaOfCircle = function(radius){
        return 3.14*radius*radius
    }

    Square = ()=> this.length* this.breadth; //this refer to the class Area
                                             //because class Area is still a function, this set to the function's context/scope

    Rectangle = ()=>{
        return this.length* this.breadth;
    }

}

let areaObj = new Area(6,9)

console.log(areaObj.AreaOfCircle(12))

console.log(areaObj.AreaOfSquare())

console.log(areaObj.AreaOfRectangle())

// Task - create a class named as account accepting 3 params name, acct type etc and
// has three methods to show balance, user dtails, and account