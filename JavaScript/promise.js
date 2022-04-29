import chalk from "chalk"
// let x=10
// let myPromise =new Promise(function(myResolve,myReject){

// if(x==5)
// myResolve()
//     else
//     myReject() 
// })


// myPromise.then(function(){

//     console.log("resolved")
// }).catch(function(){

//     console.log("rejected")
// })

/******************************************************* */
//2nd example 

// let promise = new Promise((resolve,reject)=>{

// let condition =true;
// if(condition){

//     setTimeout(()=>{

//         resolve("Promise Resolved")
//     },800)
    
// }

// else{

//     reject("Promise Rejected")
// }
    
// })


// promise.then((success)=>{
//     console.log(success)
// }).catch((error)=>console.log(error))

/************************************************************* */
//third example

// let user=[]

// let getUsers=()=>{

//     setTimeout(()=>{

//         user=[{name:"xyz",age:24,addrees:"indore"}]
//     },1000)
//     return user;
// }

// const  findUser=(username)=> {
//     const users = getUsers(); 
//     const user = users.find((user) => user.name === username); 
//     return user;
//   }
// //produce undefined result
//   console.log(findUser("xyz"))

/***************************************************** */


//callback

// const  getUsers=(callback) =>{
//     setTimeout(() => {
//       callback([
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//       ]);
//     }, 1000);
//   }
  
//   const findUser=(username, callback)=> {
//     getUsers((users) => {
//       const user = users.find((user) => user.username === username);
//       callback(user);
//     });
//   }
  
//   findUser('john', console.log);

/********************************************************** */



//creating promise

let flag =false;
const getUsers=()=>{
return new Promise((Resolve,Reject)=>{

    setTimeout(()=>{
        if(flag){

Resolve([{username:"john",age:24},{username:"harry",age:25}])
        }
        else{
            Reject("failed to get user list")
            }
    },1000)
   


})
}
const onFullfilled=(users)=>{

console.table(users)
}

const onRejected=(error)=>{

    console.log(chalk.red(error))
}



const promise = getUsers()
promise.then(onFullfilled,onRejected)
