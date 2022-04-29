//toUpperCase

let string= "hello"
let upperCase=string.toUpperCase()
//console.log(upperCase)

/*******************************************************************/

//toLowercase


let string1= "HELLO"
let lowerCase=string.toLowerCase()
//console.log(lowerCase)


/*******************************************************************/

//Obejct.values()
//Object.keys()
//Object.entries()
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
}

person.fullName=person.fullName().toString()
//console.log(JSON.stringify(person))
//console.log(Object.values(person))
//console.log(Object.keys(person))
//console.log(Object.entries(person))


/*******************************************************************/


//JSON.stringify()
//JSON.parse()
let student = {


    name :"xyz",
    age:22,
    address:"indore"
}

let result =JSON.stringify(student)
//console.log(result)
let result1=JSON.parse(result)
//console.log(result1)



/*******************************************************************/

//Set()


let a1 = [1,2,3,4,5,6,7,7,7,8,8]
let result3=new Set(a1)
//console.log(result3)

result3.add(9)

for(let x of result3){

  //console.log(x)
}





/*******************************************************************/


//Map()

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.set("apples",600)
//console.log(fruits.get("apples"))


const fruits1 = new Map();

// Set Map Values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);


console.log(fruits1)
console.log(fruits1.get("apples"))
fruits1.set("apples",800)
console.log(fruits1.get("apples"))
