const person = {


    name :"xyz",
    address:"indore",
    age:24,
greet:function(address){

console.log(this.age)
address=this.address
console.log(address)
console.log(this)
}

}

console.log(person.name)
person.greet()