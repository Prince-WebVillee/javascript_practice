let arr=[1,2,[3,4],[5,6,[7,8]]]

let result = arr.reduce((prev,curr)=>{
  
  
  
return prev.concat(curr)
  
  
},[])

let result1=result.reduce((prev,curr)=>{
  
  return prev.concat(curr)
},[])

console.log(result)
console.log(result1)


