//Shallow copying => a shallow copy means that some values are still connected to the original variable.
let person ={
    
    
    name:"xyz",
    age:24
}


let newPerson = person

console.log(newPerson)

newPerson.name="john"
console.log(newPerson)
console.log(person)

/**************************************************************/

//Deep copying => A deep copying means that value of the new variable is disconnected from the original variable.

let person ={
    
    
    name:"xyz",
    age:24
}

let newPerson = Object.assign({},person)

console.log(person)
console.log(newPerson)
newPerson.name="john"
console.log(newPerson)
