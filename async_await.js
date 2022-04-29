const arr=[]
const getUsers = async()=>{
    
    
    let data = await fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).catch(error=>error)
  Object.assign(arr,data)
    }
    
    getUsers()
console.log(arr)