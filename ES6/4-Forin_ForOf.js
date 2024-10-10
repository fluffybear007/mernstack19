// //
// //the collections or Iterables are array of JSON or JSON of JSON
let ProdictList = [{Prod1},{Prod2}]

for (let index = 0; index < ProductList.length; index++) {
    const element = ProductList[index];
    element["productname"]
}

// //a. for in loop   


// //b. For Of Loop
// //for of loop : Mainely for arrays, iterates over the property names, more recommended for array of numbers or string
// //explict key can not be identified via for of loop, for this array indexes are the keys

let cars = ["BMW", "Totota", "Honda"]

//cars[5] ="JEEP"
//cars.newkey="Tesla"


for(const element of cars){
    console.log(element)
}

//a. For in loop

arr=[1,2,3]
arr.newkey=5
arr.push(4)
for(const key in arr){
    console.log(key)
    const element = arr[key]
    console.log(element)
}


 obj={
         1:"michale",
         2:"Yao"}
for(const key in obj){
    console.log(key)
    const element = obj[key]
    console.log(element)
}

//b.For of loop
arr= [7,8,9,]
arr.push(10)
// arr.newKey=12 newkey has no value like 0,1,2 as index
arr[7]=20

for(const element of arr){
    console.log(element)
}

