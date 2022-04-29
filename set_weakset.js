//set
// let myArray = [1, 2, 3, 4, 5];
// let obj = new Set(myArray);
// console.log(obj);
// console.log(obj.size);
// obj.add(5);
// obj.delete(4);
// console.log(obj);
// var obj1 = { name: 'ajay' };
// obj.add(obj1);
// console.log(obj);

// for (let ele of obj) {
//   console.log(ele);
// }

// obj.forEach((element)=>{
//     console.log(element)
// })

//weak set


let myWeakSet = new WeakSet()
let obj1={"a":"VALUE A"}
let obj2={"b":"VALUE B"}
myWeakSet.add(obj1)
myWeakSet.add(obj2)
console.log(myWeakSet)

