//callbacks are functions passed as an argument in another function
//it gets executed after the function executed



let greet=(name,callback)=>{
console.log(`Name : ${name}`)

callback()

}


let hello=()=>{


    console.log("hello")
}


greet("Peter",hello)