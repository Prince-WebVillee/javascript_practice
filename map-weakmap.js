 //map

// let myMap=new Map([["a","value a"],["a1","value a1"]])
// console.log(myMap)
// //myMap.delete("a1")
// console.log(myMap)
// //myMap.clear()

// for(let [key,value] of myMap){

//     console.log(` key : ${key} value : ${value}`)
// }


//weakmap

let wm = new WeakMap()
let obj1={}
let obj2 ={}
wm.set(obj1,"abc")
wm.set(obj2,"xyz")
console.log(wm)
