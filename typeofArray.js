let arr=[1,2,3,4]
let obj = {


    name:"xyz",
    age:24
}

console.log(typeof arr ,typeof obj)

//differentiate between array and object

//method 1


console.log(Array.isArray(arr))
console.log(Array.isArray(obj))

//method 2

console.log(arr instanceof Array && arr instanceof Object)
console.log(obj instanceof Array && obj instanceof Object)

//method 3

console.log(arr.length)
console.log(obj.length)