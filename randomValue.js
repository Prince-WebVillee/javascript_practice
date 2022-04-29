let generateRandom=(max,min)=>{

    let result =Math.floor(Math.random() * (max - min + 1)) + min



return result
}

console.log(generateRandom(20,10))