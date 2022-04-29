let arr=[1,2,3,3,4,4,4,"a","a"]

let result =arr.filter((value,index,arr)=>{

return arr.indexOf(value)===index

})


console.log(result)