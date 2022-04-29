let users=[]
// const getUsers=async ()=>{

//    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//  const data=await response.json();
//   users=data;
// }

// getUsers()

// users==""?console.log("%cLoading Data..............","color:blue"):console.log(users)

// setTimeout(()=>{

//     console.log(users)
//     console.log("\n%cData Loaded Successfully","color:green")
// },2000)




const getUsers=()=>{



fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json())
.then(data=>{
   let result =data.map(item=>item)
   users=result
})
.catch((error)=>{
    console.log(error)
})
users==""?console.log("%cLoading Data..............","color:blue"):console.log(users)



setTimeout(()=>{


    console.log(users)
    console.log("\n%cData Loaded Successfully !!!!!","color:green")
},2000)

}
