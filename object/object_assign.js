let personalDetails ={


name:"xyz",
age:24
    
}

let otherDetails ={

address:"indore",
mobile : 1234567890

    
}

let educationalDetails ={


    graduation : "B.tech",
    percentage : 80
}

// console.log(personalDetails)
// console.log(otherDetails)
let fullDetails = Object.assign(personalDetails,...[otherDetails,educationalDetails])
console.log(fullDetails)
// console.log(Object.entries(fullDetails))
// console.log(Object.values(fullDetails))
// console.log(Object.keys(fullDetails))