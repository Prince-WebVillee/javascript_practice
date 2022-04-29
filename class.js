// class Person{
// constructor(name,age,address){

// this.name=name,
// this.age=age,
// this.address=address
    
// }

// }




// let obj = new Person("xyz",24,"abc")
// console.log(obj.name)

/*************************************************************** */

// class Person {

// constructor(name,age){

//     this.name=name;
//     this.age=age
// }

// }

// class Person_Details extends Person{

//     constructor(name,age,address){

//         super(name,age)
//         this.address=address


//     }
// }


// let obj= new Person_Details("anil",24,"Indore")
// console.log(obj)

/********************************************************************* */

class Area {

    constructor(a,b){

        this.a=a
this.b=b

    }
}


class Calc extends Area {

constructor(a,b){
super(a,b)
let c = this.a*this.b
console.log(c)
}


}


let obj=new Calc(10,20)
