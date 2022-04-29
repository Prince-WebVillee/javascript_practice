//first example
// let greet=()=>{

// console.log("hello")

// }

// let sayName=(name)=>{

//     console.log(name)
// }


// sayName("peter")
// setTimeout(greet,1000)

//second example

// let a=10;
// let b=20;

// let sum=()=>{

//     console.log(a+b)
// }


// let sub =()=>{


//     console.log(a-b)
// }

// sum()

// setTimeout(sub,2000)

//third example

const sayNames =()=>{

    console.log("Peter")
    setTimeout(()=>{

        console.log("Harry")
    },1000)
    console.log("John")
}

sayNames()