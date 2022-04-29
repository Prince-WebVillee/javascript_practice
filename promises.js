let x=10
let promise =new Promise((resolve,reject)=>{

    if(x==10){

        resolve("True")
    }
    
    else {
    
    
        reject("False")
    }
    

})



promise.then(res=>console.log(res)).catch(error=>console.log(error))