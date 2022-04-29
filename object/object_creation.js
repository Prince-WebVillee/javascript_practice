//object creation

// 1. using constructor function

// function Data(name,age,address){


//     this.name=name,
//     this.age=age,
//     this.address=address



// }

// let object = new Data("xyz",24,"indore")
// console.log(object)

/***************************************************************** */

// 2. using object literals

// let person = {


//     name :"xyz",
//     age:24,
//     address:"indore"
// }

// console.log(person.name)
// console.log(person['age'])

/**************************************************************** */

// 3. using es6 classes


// class Person {

// constructor(name,age,address)
// {

//     this.name=name;
//     this.age=age;
//     this.address=address;

// }
// }

// let person =new Person("xyz",24,"indore")

// console.log(person)


/***************************************************************** */

//using Object.create method

const human ={

gender:"male"

}
console.log(human)


let person =Object.create(human)
person.name="xyz"
person.age=24
person.address="indore"
person.gender="female"

console.log(person)


