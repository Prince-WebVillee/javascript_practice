// function add(){

// var sum=2+2;
// console.log("sum of two numbers",sum)
// console.log(this)
// }


// add()
/************************************************************* */
//this in normal function

// const person={


//     name:"xyz",
//     degree:"b.tech",
//     sum:function(){

//         console.log(this.name)
//         console.log(this)
//     }
// }

// person.sum()


/******************************************************************* */

//this in arrow function
const person ={


    name:"xyz",
    degree:"b.tech",
    sum:()=>{
        function x(){
            console.log(this)
        }
        x()

console.log(this.name)
console.log(this)

    }
}


person.sum()

/******************************************************************** */


