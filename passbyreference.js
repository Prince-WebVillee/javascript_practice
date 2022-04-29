const passbyReference=(obj)=>{
    
    
    obj.a=100
    console.log("value of in passby reference",obj)
}

let obj ={
    
    a:1
}

console.log(obj)
passbyReference(obj)
console.log(obj)
