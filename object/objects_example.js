//objects

let person = {

name:"xyz",
age:24,
address:"indore"
}

// console.log(person)
// console.log(person.name)
// console.log(person.address)

/*******************************************************************/


let student = {

firstName:"XYZ",
lastName:"ABC",
Address:"INDORE",
personalDetails:function(){

    return this.firstName + " "+ this.lastName
}
}

//console.log(`Name : ${student.personalDetails()}`)

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };


/*******************************************************************/

