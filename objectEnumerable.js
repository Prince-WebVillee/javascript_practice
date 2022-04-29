const object1={}

Object.defineProperty(object1,"name",{
  
  value:"john",
  writable:false
  
})

object1.name="harry"
console.log(object1.name)



