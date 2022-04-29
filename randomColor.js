let randomColor=()=>{

    let letters="0123456789ABCDEF"
   let colors="#"
    for(var i=0;i<=6;i++){

        colors+=letters[Math.floor(Math.random()*16)]
    }
    return colors
}

console.log(randomColor())