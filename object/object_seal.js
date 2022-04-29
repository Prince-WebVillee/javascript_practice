let person ={


    name:"xyz",
    age:24
}

 Object.seal(person)

person.age=25

console.log(person.age)
console.log(Object.isSealed(person))

